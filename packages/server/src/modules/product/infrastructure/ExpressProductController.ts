import { ServiceContainer } from "@/shared/infrastructure/ServiceContainer";
import { logger } from "@/shared/infrastructure/WinstonLogger";
import { Request, Response } from "express";
import { ProductsFilters } from "../domain";

interface IItem {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Pagination {
  offset: number;
  total: number;
  max_items: number;
  limit: number;
}

interface IAllProductsResponse {
  categories: string[];
  items: IItem[];
  pagination: Pagination;
}

interface IProductResponse {
  item: IItem & { sold_quantity: number; description: string };
}

class ExpressProductController {
  private readonly _defaultFilters: ProductsFilters = {
    limit: "4",
    offset: "0",
    query: "",
  };

  constructor() {
    logger.info("ExpressProductController init");
    this.getAll = this.getAll.bind(this);
    this.getOneById = this.getOneById.bind(this);
  }

  public async getAll(req: Request, res: Response) {
    logger.info({
      message: "ExpressProductController - getAll - queryParams",
      data: req.query,
    });

    const { products, pagination } = await ServiceContainer.product.getAll.run({
      limit: (req.query.limit as string) ?? this._defaultFilters.limit,
      offset: (req.query.offset as string) ?? this._defaultFilters.offset,
      query: (req.query.q as string) ?? this._defaultFilters.query,
    });

    const { items, categories } = products.reduce(
      (acc, product) => {
        const item = {
          id: product.getId().getValue(),
          condition: product.getCondition().getValue(),
          picture: product.getPicture().getValue(),
          free_shipping: product.getFreeShipping().getValue(),
          title: product.getTitle().getValue(),
          price: {
            amount: product.getPrice().getValue().getAmount().getValue(),
            currency: product.getPrice().getValue().getCurrency().getValue(),
            decimals: product.getPrice().getValue().getDecimals().getValue(),
          },
        };

        acc.items.push(item);
        acc.categories[product.getCategoryId().getValue()] = true;

        return acc;
      },
      {
        items: [] as IItem[],
        categories: {} as Record<string, boolean>,
      }
    );

    const response: IAllProductsResponse = {
      categories: Object.keys(categories),
      items,
      pagination: {
        limit: pagination.getLimit().getValue(),
        max_items: pagination.getMaxItems().getValue(),
        offset: pagination.getOffset().getValue(),
        total: pagination.getTotal().getValue(),
      },
    };

    return res.json(response).status(200);
  }

  public async getOneById(req: Request, res: Response) {
    logger.info({
      message: "ExpressProductController - getOneById - params",
      data: req.params,
    });

    try {
      const product = await ServiceContainer.product.getOneById.run(
        req.params.id
      );

      const response: IProductResponse = {
        item: {
          id: product.getId().getValue(),
          condition: product.getCondition().getValue(),
          picture: product.getPicture().getValue(),
          free_shipping: product.getFreeShipping().getValue(),
          title: product.getTitle().getValue(),
          price: {
            amount: product.getPrice().getValue().getAmount().getValue(),
            currency: product.getPrice().getValue().getCurrency().getValue(),
            decimals: product.getPrice().getValue().getDecimals().getValue(),
          },
          description: product.getDescription().getValue()!,
          sold_quantity: product.getSoldQuantity().getValue()!,
        },
      };

      return res.json(response).status(200);
    } catch {
      return res.status(404).json({ message: "Ocurrio algo inesperado" });
    }
  }
}

export { ExpressProductController };

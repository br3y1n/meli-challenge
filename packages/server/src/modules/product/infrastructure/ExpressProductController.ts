import { ServiceContainer } from "@/shared/infrastructure/ServiceContainer";
import { Request, Response } from "express";

interface IAuthor {
  name: string;
  lastname: string;
}

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

interface IAllProductsResponse {
  author: IAuthor;
  categories: string[];
  items: IItem[];
}

interface IProductResponse {
  author: IAuthor;
  item: IItem & { sold_quantity: number; description: string };
}

class ExpressProductController {
  private readonly _author: IAuthor = {
    name: "Brayan",
    lastname: "Arango",
  };

  constructor() {
    this.getAllByTitle = this.getAllByTitle.bind(this);
    this.getOneById = this.getOneById.bind(this);
  }

  public async getAllByTitle(req: Request, res: Response) {
    const products = await ServiceContainer.product.getAllByTitle.run(
      (req.query.q as string) ?? ""
    );

    const response: IAllProductsResponse = {
      author: this._author,
      categories: [],
      items: products.map((product) => ({
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
      })),
    };

    return res.json(response).status(200);
  }

  public async getOneById(req: Request, res: Response) {
    try {
      const product = await ServiceContainer.product.getOneById.run(
        req.params.id
      );

      const response: IProductResponse = {
        author: this._author,
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
          description: product.getDescription().getValue(),
          sold_quantity: product.getSoldQuantity().getValue(),
        },
      };

      return res.json(response).status(200);
    } catch {
      return res.status(404).json({ message: "Ocurrio algo inesperado" });
    }
  }
}

export { ExpressProductController };

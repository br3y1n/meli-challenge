import { ServiceContainer } from "@/shared/infrastructure/ServiceContainer";
import { ExpressProductController } from "@modules/product/infrastructure/ExpressProductController";
import express from "express";
import request from "supertest";

jest.mock("@/shared/infrastructure/ServiceContainer", () => ({
  ServiceContainer: {
    product: {
      getAll: {
        run: jest.fn(),
      },
      getOneById: {
        run: jest.fn(),
      },
    },
  },
}));

describe("ExpressProductController tests:", () => {
  let app: express.Express;
  let controller: ExpressProductController;

  beforeEach(() => {
    app = express();
    app.use(express.json());

    controller = new ExpressProductController();

    app.get("/api/items", controller.getAll);
    app.get("/api/items/:id", controller.getOneById);
  });

  it("should return all products with pagination and categories", async () => {
    (ServiceContainer.product.getAll.run as jest.Mock).mockResolvedValue({
      products: [
        {
          getId: () => ({ getValue: () => "1" }),
          getCondition: () => ({ getValue: () => "new" }),
          getPicture: () => ({ getValue: () => "pic.jpg" }),
          getFreeShipping: () => ({ getValue: () => true }),
          getTitle: () => ({ getValue: () => "Product 1" }),
          getPrice: () => ({
            getValue: () => ({
              getAmount: () => ({ getValue: () => 100 }),
              getCurrency: () => ({ getValue: () => "USD" }),
              getDecimals: () => ({ getValue: () => 2 }),
            }),
          }),
        },
      ],
      pagination: {
        getLimit: () => ({ getValue: () => 10 }),
        getMaxItems: () => ({ getValue: () => 100 }),
        getOffset: () => ({ getValue: () => 0 }),
        getTotal: () => ({ getValue: () => 50 }),
      },
      categories: [
        {
          getId: () => ({ getValue: () => "cat1" }),
          getName: () => ({ getValue: () => "Category 1" }),
        },
      ],
    });

    const response = await request(app).get("/api/items");

    expect(ServiceContainer.product.getAll.run).toHaveBeenCalledWith({
      category: "",
      limit: "4",
      offset: "0",
      query: "",
      sort: "relevance",
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      categories: [{ id: "cat1", name: "Category 1" }],
      items: [
        {
          id: "1",
          condition: "new",
          picture: "pic.jpg",
          free_shipping: true,
          title: "Product 1",
          price: {
            amount: 100,
            currency: "USD",
            decimals: 2,
          },
        },
      ],
      pagination: {
        limit: 10,
        max_items: 100,
        offset: 0,
        total: 50,
      },
    });
  });

  it("When the request has queryParams, then these become filters for the getAll.run", async () => {
    (ServiceContainer.product.getAll.run as jest.Mock).mockResolvedValue({
      products: [
        {
          getId: () => ({ getValue: () => "1" }),
          getCondition: () => ({ getValue: () => "new" }),
          getPicture: () => ({ getValue: () => "pic.jpg" }),
          getFreeShipping: () => ({ getValue: () => true }),
          getTitle: () => ({ getValue: () => "Product 1" }),
          getPrice: () => ({
            getValue: () => ({
              getAmount: () => ({ getValue: () => 100 }),
              getCurrency: () => ({ getValue: () => "USD" }),
              getDecimals: () => ({ getValue: () => 2 }),
            }),
          }),
        },
      ],
      pagination: {
        getLimit: () => ({ getValue: () => 10 }),
        getMaxItems: () => ({ getValue: () => 100 }),
        getOffset: () => ({ getValue: () => 0 }),
        getTotal: () => ({ getValue: () => 50 }),
      },
      categories: [
        {
          getId: () => ({ getValue: () => "cat1" }),
          getName: () => ({ getValue: () => "Category 1" }),
        },
      ],
    });

    await request(app).get(
      "/api/items?sort=price_asc&limit=8&offset=8&q=tester&category=123"
    );

    expect(ServiceContainer.product.getAll.run).toHaveBeenCalledWith({
      category: "123",
      limit: "8",
      offset: "8",
      query: "tester",
      sort: "price_asc",
    });
  });

  it("should return product details by id", async () => {
    (ServiceContainer.product.getOneById.run as jest.Mock).mockResolvedValue({
      product: {
        getId: () => ({ getValue: () => "1" }),
        getCondition: () => ({ getValue: () => "new" }),
        getPicture: () => ({ getValue: () => "pic.jpg" }),
        getFreeShipping: () => ({ getValue: () => true }),
        getTitle: () => ({ getValue: () => "Product 1" }),
        getPrice: () => ({
          getValue: () => ({
            getAmount: () => ({ getValue: () => 100 }),
            getCurrency: () => ({ getValue: () => "USD" }),
            getDecimals: () => ({ getValue: () => 2 }),
          }),
        }),
        getDescription: () => ({ getValue: () => "Product description" }),
        getSoldQuantity: () => ({ getValue: () => 10 }),
      },
      categories: [
        {
          getId: () => ({ getValue: () => "cat1" }),
          getName: () => ({ getValue: () => "Category 1" }),
        },
      ],
    });

    const response = await request(app).get("/api/items/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      item: {
        id: "1",
        condition: "new",
        picture: "pic.jpg",
        free_shipping: true,
        title: "Product 1",
        price: {
          amount: 100,
          currency: "USD",
          decimals: 2,
        },
        description: "Product description",
        sold_quantity: 10,
      },
      categories: [{ id: "cat1", name: "Category 1" }],
    });
  });
});

import { Pagination } from "@/shared/domain";
import { axiosClient } from "@/shared/infrastructure/AxiosClient";
import { ProductSortEnum } from "@modules/product/domain";
import { MeliApiProductRepository } from "@modules/product/infrastructure/MeliApiProductRepository";

describe("MeliApiProductRepository tests:", () => {
  let repository: MeliApiProductRepository;

  beforeEach(() => {
    repository = new MeliApiProductRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return products and pagination from getAll", async () => {
    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        results: [
          {
            id: "123",
            title: "Cepillo",
            condition: "new",
            listing_type_id: "some_type",
            category_id: "456",
            thumbnail: "/cepillo.jpg",
            currency_id: "COP",
            price: 456,
            available_quantity: 10,
            shipping: { free_shipping: false },
          },
        ],
        paging: {
          total: 1000,
          primary_results: 1,
          offset: 0,
          limit: 10,
        },
        filters: [
          {
            id: "category",
            name: "Category",
            values: [
              {
                id: "456",
                name: "CategoryName",
                path_from_root: [{ id: "123", name: "Root" }],
              },
            ],
          },
        ],
      },
    });

    const filters = {
      limit: "10",
      offset: "0",
      query: "Cepillo",
      sort: ProductSortEnum.RELEVANCE,
      category: "",
    };

    const result = await repository.getAll(filters);

    expect(result.products).toHaveLength(1);
    expect(result.products[0].getTitle().getValue()).toBe("Cepillo");
    expect(result.pagination).toBeInstanceOf(Pagination);
    expect(result.categories).toHaveLength(1);
  });

  it("When filters in get.response is empty, then categories is empty", async () => {
    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        results: [
          {
            id: "123",
            title: "Cepillo",
            condition: "new",
            listing_type_id: "some_type",
            category_id: "456",
            thumbnail: "/cepillo.jpg",
            currency_id: "COP",
            price: 456,
            available_quantity: 10,
            shipping: { free_shipping: false },
          },
        ],
        paging: {
          total: 1000,
          primary_results: 1,
          offset: 0,
          limit: 10,
        },
        filters: [],
      },
    });

    const filters = {
      limit: "10",
      offset: "0",
      query: "Cepillo",
      sort: ProductSortEnum.RELEVANCE,
      category: "",
    };

    const result = await repository.getAll(filters);

    expect(result.categories).toHaveLength(0);
  });

  it("should return a product by id from getOneById", async () => {
    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        id: "123",
        title: "Cepillo",
        pictures: [{ secure_url: "/cepillo.jpg" }],
        thumbnail: "/cepillo-thumbnail.jpg",
        condition: "new",
        shipping: { free_shipping: false },
        currency_id: "COP",
        price: 456,
        sold_quantity: 100,
        category_id: "456",
      },
    });

    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        text: "This is a description",
        plain_text: "This is a plain description",
      },
    });

    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        path_from_root: [{ id: "456", name: "CategoryName" }],
      },
    });

    const id = "123";
    const result = await repository.getOneById(id);

    expect(result.product.getId().getValue()).toBe(id);
    expect(result.product.getTitle().getValue()).toBe("Cepillo");
    expect(result.product.getDescription().getValue()).toBe(
      "This is a description"
    );
    expect(result.categories).toHaveLength(1);
  });

  it("When text is empty and pictures, then product.picture is thumbnail and description plain_text", async () => {
    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        id: "123",
        title: "Cepillo",
        pictures: [],
        thumbnail: "/cepillo-thumbnail.jpg",
        condition: "new",
        shipping: { free_shipping: false },
        currency_id: "COP",
        price: 456,
        sold_quantity: 100,
        category_id: "456",
      },
    });

    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        text: "",
        plain_text: "This is a plain description",
      },
    });

    jest.spyOn(axiosClient, "get").mockResolvedValueOnce({
      data: {
        path_from_root: [{ id: "456", name: "CategoryName" }],
      },
    });

    const id = "456";
    const result = await repository.getOneById(id);

    expect(result.product.getPicture().getValue()).toBe(
      "/cepillo-thumbnail.jpg"
    );
    expect(result.product.getDescription().getValue()).toBe(
      "This is a plain description"
    );
  });
});

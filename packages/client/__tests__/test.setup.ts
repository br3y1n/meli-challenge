jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useRouter: jest.fn(),
  useParams: jest.fn(),
}));

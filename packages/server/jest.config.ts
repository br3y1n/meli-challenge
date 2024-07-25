import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["./src/**/*.{js,ts}"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@modules/(.*)": "<rootDir>/src/modules/$1",
  },
  testMatch: ["**/__tests__/src/**/*.[jt]s"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      functions: 100,
      statements: 100,
    },
  },
};

export default config;

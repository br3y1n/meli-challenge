import type { Config } from "jest";

const config: Config = {
  verbose: true,
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@app/(.*)": "<rootDir>/src/app/$1",
    // "@themes/(.*)": "<rootDir>/src/themes/$1",
    // "@components/(.*)": "<rootDir>/src/components/$1",
    // "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    // "@contexts/(.*)": "<rootDir>/src/contexts/$1",
    // "@adapters/(.*)": "<rootDir>/src/adapters/$1",
    // "@entities/(.*)": "<rootDir>/src/entities/$1",
    // "@utils": "<rootDir>/src/utils",
    // "@enums": "<rootDir>/src/enums",
    "@test-utils": "<rootDir>/__tests__/test.utils.tsx",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "next/font/(.*)": require.resolve(
      "next/dist/build/jest/__mocks__/nextFontMock.js"
    ),
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./__tests__/tsconfig.test.json",
      },
    ],
  },
  testMatch: ["**/__tests__/src/**/*.[jt]s?(x)"],
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

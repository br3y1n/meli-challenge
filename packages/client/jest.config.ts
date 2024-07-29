import type { Config } from "jest";

const config: Config = {
  verbose: true,
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@constants/(.*)": "<rootDir>/src/constants/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@api/(.*)": "<rootDir>/src/api/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@lib/(.*)": "<rootDir>/src/lib/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@test-utils": "<rootDir>/__tests__/test.utils.tsx",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "next/font/(.*)": require.resolve(
      "next/dist/build/jest/__mocks__/nextFontMock.js"
    ),
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "<rootDir>/__tests__/test.setup.ts",
  ],
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

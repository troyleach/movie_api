/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  verbose: true,
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Automatically clear mock calls and instances between every test
  // clearMocks: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // Automatically reset mock state between every test
  // resetMocks: false,

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '**/?(*_)+(spec|test).[jt]s?(x)',
  ],
};

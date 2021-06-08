module.exports = {
  bail: true,
  clearMocks: true,
  coverageDirectory: '__tests__/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.js'],
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  moduleNameMapper: {
    '^@root/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setup.js'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin'
  }
};

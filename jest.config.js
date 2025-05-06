const nextJest = require('next/jest')
const createJestConfig = nextJest({
// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
dir: './',
})



/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */


/** @type {import('jest').Config} */
const config = {

  
  collectCoverage: true,

  coverageDirectory: "coverage",

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
},

preset: 'ts-jest',
rootDir: './',

// Add more setup options before each test is run
setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

// testEnvironment: 'jest-environment-jsdom',
testEnvironment: "jsdom",

// if using TypeScript with a baseUrl set to the root directory then you need the 
// below for alias' to work
moduleDirectories: ['node_modules', '<rootDir>/'],

  
};

// createJestConfig is exported this way to ensure that next/jest
// can load the Next.js config which is async
module.exports = createJestConfig(config)


/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  silent: true, // disable all console output
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { diagnostics: { ignoreCodes: ['TS151001'] } }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: [".d.ts", ".js"]
};

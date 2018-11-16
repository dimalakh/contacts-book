module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/jest/setupEnzyme.ts",
  "collectCoverageFrom": [
    "**/src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/jest/**"
  ]
}
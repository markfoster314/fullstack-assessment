module.exports = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["backend"],
  setupFilesAfterEnv: ["./setup-tests.js"],
  testEnvironment: "jsdom",
};

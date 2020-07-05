module.exports = {
  globals: {
    "ts-jest": {
      skipBabel: true,
    },
  },
  mapCoverage: true,
  moduleFileExtensions: ["js", "ts"],
  testResultsProcessor: "jest-sonar-reporter",
  transform: {
    "^.+\\.ts$": "/var/lib/jenkins/workspace/kube-cloud-deploy/node_modules/ts-jest/preprocessor.js",
  },
  testMatch: ["/var/lib/jenkins/workspace/kube-cloud-deploy/tests/**/*.test-server.js"],
};

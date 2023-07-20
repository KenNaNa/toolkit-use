module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: [".ts"],
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: {
    "^tests/(.*)": "<rootDir>/tests/$1",
  },
  transform: {
      '^.+\.jsx?$': 'babel-jest', // 这个是jest的默认配置
      '^.+\.ts?$': 'ts-jest' // typescript转换
  },
  testMatch: ['**/tests/**/*.spec.ts'],
  transformIgnorePatterns: ['/node_modules/'],
};

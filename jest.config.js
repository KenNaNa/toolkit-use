module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
      '^.+\.jsx?$': 'babel-jest', // 这个是jest的默认配置
      '^.+\.ts?$': 'ts-jest' // typescript转换
  }
};

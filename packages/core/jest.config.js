module.exports = {
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: '.',
        outputName: 'test-report.xml',
        reportedFilePath: 'absolute'
      }
    ]
  ],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.js'
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(js|jsx|ts|tsx)', '**/*.test.+(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.(ts)$': 'babel-jest',
  }
}
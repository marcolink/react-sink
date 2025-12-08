module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.test.json' }]
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setup.tests.js']
};

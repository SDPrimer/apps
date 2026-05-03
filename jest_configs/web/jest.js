// Jest mocks for react web.
import '@shared/localization';

jest.useFakeTimers();
jest.mock('zustand', () => require('./__mocks__/zustand'));

// Font source mocks.
jest.mock('@fontsource/bungee-shade', () => ({
  __esModule: true,
  default: 'bungee-shade',
}));

/**
 * Mock helmet module
 */
jest.mock('react-helmet-async', () => ({
  Helmet: jest.fn(({ children }) => <div>{children}</div>),
  HelmetProvider: () => jest.fn(),
}));

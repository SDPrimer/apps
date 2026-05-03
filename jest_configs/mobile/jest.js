// Mock for mobile.
jest.mock("react-native-worklets", () => ({
  useWorklet: (fn) => fn,
  useFlow: () => ({ current: null }),
  Worklets: {
    createContext: () => ({}),
  },
}));

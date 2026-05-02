// Mock for mobile.
export * from "@react-native-async-storage/async-storage/jest";

jest.mock("react-native-worklets", () => ({
  useWorklet: (fn) => fn,
  useFlow: () => ({ current: null }),
  Worklets: {
    createContext: () => ({}),
  },
}));

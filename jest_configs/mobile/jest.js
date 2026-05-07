jest.mock("react-native", () => ({
  View: "View",
  Text: "Text",
  TouchableOpacity: "TouchableOpacity",
  StyleSheet: {
    create: (s) => s,
    flatten: (s) => s,
  },
  Platform: { OS: "ios", select: (obj) => obj.ios || obj },
  useColorScheme: () => "light",
}));

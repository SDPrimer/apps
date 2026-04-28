import { View } from "react-native";

const WebViewMock = () => <View />;
jest.mock("react-native-webview", () => WebViewMock);

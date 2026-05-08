import * as React from "react";
import { renderMobileWithProvider } from "@shared/sdpui/utils/test_utils/mobile";
import { Text } from "@shared/sdpui/components/Text";

describe("Text", () => {
  test("renders with default props", () => {
    const { getByText } = renderMobileWithProvider(
      <Text>Hello World</Text>,
      "light",
    );
    expect(getByText("Hello World")).toBeTruthy();
  });

  test("renders with variant body", () => {
    const { getByText } = renderMobileWithProvider(
      <Text variant="body">Body text</Text>,
      "light",
    );
    expect(getByText("Body text")).toBeTruthy();
  });

  test("renders with variant title", () => {
    const { getByText } = renderMobileWithProvider(
      <Text variant="title">Title text</Text>,
      "light",
    );
    expect(getByText("Title text")).toBeTruthy();
  });

  test("renders with variant heading", () => {
    const { getByText } = renderMobileWithProvider(
      <Text variant="heading">Heading text</Text>,
      "light",
    );
    expect(getByText("Heading text")).toBeTruthy();
  });

  test("renders with color prop", () => {
    const { getByText } = renderMobileWithProvider(
      <Text color="red">Colored text</Text>,
      "light",
    );
    expect(getByText("Colored text")).toBeTruthy();
  });

  test("renders with style prop", () => {
    const { getByText } = renderMobileWithProvider(
      <Text style={{ opacity: 0.5 }}>Styled text</Text>,
      "light",
    );
    expect(getByText("Styled text")).toBeTruthy();
  });

  test("passes children through", () => {
    const { getByText } = renderMobileWithProvider(
      <Text variant="body">Nested content</Text>,
      "light",
    );
    expect(getByText("Nested content")).toBeTruthy();
  });
});

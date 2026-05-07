import * as React from "react";
import { renderMobileWithProvider } from "../../../../utils";
import Button from "../../Button";

describe("Button", () => {
  it("renders with default props", () => {
    const { getByText } = renderMobileWithProvider(
      <Button>Click me</Button>,
      "light",
    );
    expect(getByText("Click me")).toMatchSnapshot();
  });

  test("renders with variant primary", () => {
    const { getByText } = renderMobileWithProvider(
      <Button variant="primary">Primary</Button>,
      "light",
    );
    expect(getByText("Primary")).toBeTruthy();
  });

  test("renders with variant secondary", () => {
    const { getByText } = renderMobileWithProvider(
      <Button variant="secondary">Secondary</Button>,
      "light",
    );
    expect(getByText("Secondary")).toBeTruthy();
  });

  test("renders with variant outline", () => {
    const { getByText } = renderMobileWithProvider(
      <Button variant="outline">Outline</Button>,
      "light",
    );
    expect(getByText("Outline")).toBeTruthy();
  });

  test("renders with variant ghost", () => {
    const { getByText } = renderMobileWithProvider(
      <Button variant="ghost">Ghost</Button>,
      "light",
    );
    expect(getByText("Ghost")).toBeTruthy();
  });

  test("renders with size sm", () => {
    const { getByText } = renderMobileWithProvider(
      <Button size="sm">Small</Button>,
      "light",
    );
    expect(getByText("Small")).toBeTruthy();
  });

  test("renders with size md", () => {
    const { getByText } = renderMobileWithProvider(
      <Button size="md">Medium</Button>,
      "light",
    );
    expect(getByText("Medium")).toBeTruthy();
  });

  test("renders with size lg", () => {
    const { getByText } = renderMobileWithProvider(
      <Button size="lg">Large</Button>,
      "light",
    );
    expect(getByText("Large")).toBeTruthy();
  });

  test("passes children through", () => {
    const { getByText } = renderMobileWithProvider(
      <Button variant="primary" size="md">
        Button content
      </Button>,
      "light",
    );
    expect(getByText("Button content")).toBeTruthy();
  });

  test("passes additional props", () => {
    const { getByTestId } = renderMobileWithProvider(
      <Button variant="primary" disabled testID="test-button" />,
      "light",
    );
    const button = getByTestId("test-button");
    expect(button.hasAttribute("disabled")).toBe(true);
  });
});

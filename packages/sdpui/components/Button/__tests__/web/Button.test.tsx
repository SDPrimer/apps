import { renderWebWithProvider } from "@shared/sdpui/utils/test_utils/web";
import Button from "../../Button";
import * as React from "react";

describe("Button", () => {
  test("renders with default props", () => {
    const { container } = renderWebWithProvider(
      <Button>Click me</Button>,
      "light",
    );
    expect(container.textContent).toBe("Click me");
  });

  test("renders with variant primary", () => {
    const { container } = renderWebWithProvider(
      <Button variant="primary">Primary</Button>,
      "light",
    );
    expect(container.textContent).toBe("Primary");
  });

  test("renders with variant secondary", () => {
    const { container } = renderWebWithProvider(
      <Button variant="secondary">Secondary</Button>,
      "light",
    );
    expect(container.textContent).toBe("Secondary");
  });

  test("renders with variant outline", () => {
    const { container } = renderWebWithProvider(
      <Button variant="outline">Outline</Button>,
      "light",
    );
    expect(container.textContent).toBe("Outline");
  });

  test("renders with variant ghost", () => {
    const { container } = renderWebWithProvider(
      <Button variant="ghost">Ghost</Button>,
      "light",
    );
    expect(container.textContent).toBe("Ghost");
  });

  test("renders with size sm", () => {
    const { container } = renderWebWithProvider(
      <Button size="sm">Small</Button>,
      "light",
    );
    expect(container.textContent).toBe("Small");
  });

  test("renders with size md", () => {
    const { container } = renderWebWithProvider(
      <Button size="md">Medium</Button>,
      "light",
    );
    expect(container.textContent).toBe("Medium");
  });

  test("renders with size lg", () => {
    const { container } = renderWebWithProvider(
      <Button size="lg">Large</Button>,
      "light",
    );
    expect(container.textContent).toBe("Large");
  });

  test("passes children through", () => {
    const { container } = renderWebWithProvider(
      <Button variant="primary" size="md">
        <span>Button content</span>
      </Button>,
      "light",
    );
    expect(container.querySelector("span")).toBeTruthy();
  });

  test("passes additional props", () => {
    const { container } = renderWebWithProvider(
      <Button variant="primary" disabled data-testid="test-button" />,
      "light",
    );
    const button = container.querySelector(
      "[data-testid='test-button']",
    ) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  test("matches snapshot", () => {
    const { container } = renderWebWithProvider(
      <Button variant="primary">Primary</Button>,
      "light",
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

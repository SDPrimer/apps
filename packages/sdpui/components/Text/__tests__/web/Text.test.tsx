import * as React from "react";
import { renderWebWithProvider } from "@shared/sdpui/utils/test_utils/web";
import Text from "../../Text";

describe("Text", () => {
  test("renders with default props", () => {
    const { container } = renderWebWithProvider(
      <Text>Hello World</Text>,
      "light",
    );
    expect(container.textContent).toBe("Hello World");
  });

  test("renders with variant body", () => {
    const { container } = renderWebWithProvider(
      <Text variant="body">Body text</Text>,
      "light",
    );
    expect(container.textContent).toBe("Body text");
  });

  test("renders with variant title", () => {
    const { container } = renderWebWithProvider(
      <Text variant="title">Title text</Text>,
      "light",
    );
    expect(container.textContent).toBe("Title text");
  });

  test("renders with variant heading", () => {
    const { container } = renderWebWithProvider(
      <Text variant="heading">Heading text</Text>,
      "light",
    );
    expect(container.textContent).toBe("Heading text");
  });

  test("renders with color prop", () => {
    const { container } = renderWebWithProvider(
      <Text color="red">Colored text</Text>,
      "light",
    );
    expect(container.textContent).toBe("Colored text");
  });

  test("passes children through", () => {
    const { container } = renderWebWithProvider(
      <Text variant="body">
        <span>Nested content</span>
      </Text>,
      "light",
    );
    expect(container.querySelector("span")).toBeTruthy();
  });

  test("matches snapshot", () => {
    const { container } = renderWebWithProvider(
      <Text variant="body">Body text</Text>,
      "light",
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

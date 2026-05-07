import React from "react";
import type { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Theme } from "../../../themes";
import { SDPUIProvider } from "../../../providers";

const AllTheProviders =
  (theme: Theme) =>
  ({ children }: PropsWithChildren) => {
    return <SDPUIProvider theme={theme}>{children}</SDPUIProvider>;
  };

const renderWebWithProvider = (
  ui: React.ReactElement,
  theme: Theme,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  return render(ui, { wrapper: AllTheProviders(theme), ...options });
};

export default renderWebWithProvider;

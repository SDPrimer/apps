import React from "react";
import type { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { SDPUIProvider } from "../../../providers";
import { Theme } from "../../../themes";

const AllTheProviders =
  (theme: Theme) =>
  ({ children }: PropsWithChildren) => {
    return <SDPUIProvider theme={theme}>{children}</SDPUIProvider>;
  };

const renderMobileWithProvider = (
  ui: React.ReactElement,
  theme: Theme,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders(theme), ...options });

export default renderMobileWithProvider;

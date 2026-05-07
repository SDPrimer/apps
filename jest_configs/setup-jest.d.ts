
declare const global: NodeJS.Global & typeof globalThis & {
  React?: typeof import("react");
};

declare namespace NodeJS {
  interface Global {
    React?: typeof import("react");
  }
}

type TFontWeight =
  | number
  | "thin"
  | "ultralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "ultrabold"
  | "heavy";

export interface ISingleLoad {
  family: string;
  src: string;
  fontStyle?: string;
  fontWeight?: TFontWeight;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
}

export interface IBulkLoad {
  family: string;
  fonts: {
    src: string;
    fontStyle?: string;
    fontWeight?: TFontWeight;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    [key: string]: any;
  }[];
}

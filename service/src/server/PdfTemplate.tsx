import { Document } from "ui";
import { renderToStream } from "@react-pdf/renderer";
import React from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type PdfTemplate = {
  markup(): Promise<JSX.Element> | JSX.Element;
};

export const wrapPdf = (markup: JSX.Element) => {
  return renderToStream(<Document>{markup}</Document>);
};

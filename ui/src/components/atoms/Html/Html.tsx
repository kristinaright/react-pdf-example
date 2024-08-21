import { StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Html as RawHtml, HtmlStyles } from "react-pdf-html";
import { globalStyles } from "../../../globalStyles";

type IHtmlProps = {
  children: string;
  componentStyles?: HtmlStyles | HtmlStyles[];
};

const globalHtmlStyles = StyleSheet.create({
  body: {
    ...globalStyles,
    margin: 0,
  },
  p: {
    ...globalStyles,
  },
});

// !IMPORTANT
// global html styles should correspond to Document's styles
export const Html: React.FC<IHtmlProps> = ({ children }) => (
  <RawHtml stylesheet={globalHtmlStyles}>
    {children}
  </RawHtml>
);

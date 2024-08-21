import { BasicPdfPage as Template } from "ui";
import React from "react";
import { PdfTemplate } from "../../server/PdfTemplate";

export const BasicPdf: PdfTemplate = {
  markup() {
    return <Template />;
  },
};

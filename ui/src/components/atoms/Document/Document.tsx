import { Document as PdfDocument, Font } from "@react-pdf/renderer";
import React from "react";
import { useFonts } from "../../../hooks";

type IDocumentProps = {
  children: React.ReactNode;
};

const hyphenationCallback = (word: string) => [word];

Font.registerHyphenationCallback(hyphenationCallback);

export const Document: React.FC<IDocumentProps> = ({
  children
}) => {
  const globalStyles = useFonts({ locale: 'zh' });

  return (
    <PdfDocument style={globalStyles}>
      {children}
    </PdfDocument>
  );
};

export default Document;

import { wrapPdf } from "./PdfTemplate";

export const respondWithPdf = async ({
  markup,
}: { markup: JSX.Element; }) => {
  try {
    const pdf = await wrapPdf(markup);
    return pdf;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

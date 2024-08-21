import { globalStyles } from "../../globalStyles";

export const setRegisteredFont = ({
  fontFamily = "Roboto",
}: {
  fontFamily: string;
}) => {
  return { ...globalStyles, fontFamily };
};

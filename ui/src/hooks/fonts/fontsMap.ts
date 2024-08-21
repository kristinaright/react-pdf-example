import { IBulkLoad, ISingleLoad } from "../../types";

export const fontFamilySettingsMap: Record<string, ISingleLoad | IBulkLoad> = {
  en: {
    family: "Roboto",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf",
      },
      {
        src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAw.ttf",
        fontWeight: "medium",
      },
      {
        src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAw.ttf",
        fontWeight: "bold",
      },
      {
        src: "https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xP.ttf",
        fontWeight: "normal",
        fontStyle: "italic",
      },
      {
        src: "https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ABc9.ttf",
        fontWeight: "medium",
        fontStyle: "italic",
      },
      {
        src: "https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TzBhc9.ttf",
        fontWeight: "bold",
        fontStyle: "italic",
      },
    ],
  },
  zh: {
    family: "Noto Sans SC",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYw.ttf",
      },
      {
        src: "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGwHCnYw.ttf",
        fontWeight: "medium",
      },
      {
        src: "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGzjCnYw.ttf",
        fontWeight: "bold",
      },
    ],
  },
};

import express, { NextFunction, Request, Response } from "express";
import { getLocale } from "./src/server/getLocale";
import { respondWithPdf } from "./src/server/respondWithPdf";
import { templates } from "./src/templates";

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());

app.use((req, res, next) => {
  if(req.url !== "/json/version" && req.url !== "/json/list") {

  const toMB = (bytes: number) => (bytes / 1024 / 1024).toFixed(2);
  const memoryUsage = process.memoryUsage();
  console.log(
    `Memory Usage - RSS: ${toMB(memoryUsage.rss)}Mb, Heap Total: ${toMB(
      memoryUsage.heapTotal,
    )}Mb, Heap Used: ${toMB(memoryUsage.heapUsed)}Mb, External: ${
      memoryUsage.external
    }, ArrayBuffers: ${memoryUsage.arrayBuffers}`,
  );
  }
  next();
});

app.get(
  `/documents/basic`,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const markup = await templates["basic"].markup();
      const pdfStream = await respondWithPdf({ markup });
      pdfStream.pipe(res);

      pdfStream.on("error", (err) => {
        next(err);
      });
    } catch (error) {
      next(error);
    }
  },
);

app.listen(port, () => {
  console.log(`PDF Generator runs on http://localhost:${port}`);
});

export default app;

import express from "express";
import * as diaryService from "../services/diaries.service";

const router = express.Router();

router.get(
  "/",
  (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
    try {
      res.status(200).json(diaryService.getEntriesWithoutSensitiveInfo());
    } catch (error) {
      res.status(400).json({
        error: "Error on getEntriesWithoutSensitiveInfo",
        message: error instanceof Error ? error?.message : "",
      });
    }
  }
);

router.get(
  "/:id",
  (req: express.Request, res: express.Response, _next: express.NextFunction) => {
    try {
      const { id } = req.params;
      const diary = diaryService.findById(+id);
      res.status(200).json(diary);
    } catch (error) {
      res.status(404).json({
        error: "Not Found",
        message: error instanceof Error ? error?.message : "",
      });
    }
  }
);

router.post(
  "/",
  (req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const data = req.body;
    const newDiaryEntry = diaryService.addDiary(data);
    res.status(200).json(newDiaryEntry);
  }
);

export default router;

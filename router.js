import { Router } from 'express';
import promptController from "./controllers/promptController.js"

const router = Router();

router.get("/todaysprompt", (req, res) => {promptController.getTodaysPrompt(req, res);});
router.get("/multiDayPrompts", (req, res) => {promptController.getMultiDayPrompts(req, res);});

export default router;
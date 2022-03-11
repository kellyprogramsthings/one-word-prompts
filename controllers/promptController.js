import { PromptService } from '../classes/promptService.js';
import { errorCatch } from '../utils/helpers.js';

const promptService = new PromptService;

const getPrompt = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const prompt = await promptService.getPrompt();
    if (prompt) {
      return res.status(200).json(prompt);
    }
    else {
      return res.status(404).json({ message: "That prompt doesn't exist." });
    }
  }
  catch(e) {
    errorCatch(e);
    return res.status(500).json({ message: e.message })
  }
}

const getTodaysPrompt = async (_req, res) => {
  try {
    const prompt = await promptService.getTodaysPrompt();
    if (prompt) {
      return res.status(200).json(prompt);
    }
    else {
      return res.status(500).json({ message: "Could not retrieve today's prompt." })
    }
  }
  catch(e) {
    errorCatch(e);
    return res.status(500).json({ message: e.message })
  }
}

const getMultiDayPrompts = async (_req, res) => {
  try {
    const prompts = await promptService.getMultiDayPrompts(90);
    if (prompts) {
      return res.status(200).json(prompts);
    }
    else {
      return res.status(500).json({ message: "Could not retrieve previous day prompts." })
    }
  }
  catch(e) {
    errorCatch(e);
    return res.status(500).json({ message: e.message })
  }
}

export default {
  getPrompt,
  getTodaysPrompt,
  getMultiDayPrompts
}
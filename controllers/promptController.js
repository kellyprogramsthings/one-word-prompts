// import _ from 'lodash';
import { PromptService } from '../classes/promptService.js';

const promptService = new PromptService;

const getPrompt = async (req, res) => {
  const id = parseInt(req.params?.id);
  const prompt = await promptService.getPrompt();
  if (prompt) {
    return res.status(200).json(prompt);
  }
  else {
    return res.status(404).json({ message: "That prompt doesn't exist." });
  }
}

const getTodaysPrompt = async (req, res) => {
  const prompt = await promptService.getTodaysPrompt();
  if (prompt) {
    return res.status(200).json(prompt);
  }
  else {
    return res.status(500).json({ message: "Could not retrieve today's prompt." })
  }
}

const getMultiDayPrompts = async (req, res) => {
  const prompts = await promptService.getMultiDayPrompts(90);
  if (prompts) {
    return res.status(200).json(prompts);
  }
  else {
    return res.status(500).json({ message: "Could not retrieve previous day prompts." })
  }
}

export default {
  getPrompt,
  getTodaysPrompt,
  getMultiDayPrompts
}
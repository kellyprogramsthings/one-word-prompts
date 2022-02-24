import _ from 'lodash';
import { PromptService } from '../classes/promptService.js';

const promptService = new PromptService;

const getPrompt = async (req, res) => {
  const id = parseInt(req.params?.id);
  const prompt = await promptService.getPrompt();
  if (prompt) {
    return res.status(200).json(prompt);
  }
  else {
    return res.status(404).json({ message: "That id doesn't exist." });
  }
}

const getTodaysPrompt = async (req, res) => {
  const prompt = await promptService.getTodaysPrompt();
  if (prompt) {
    return res.status(200).json(prompt);
  }
  else {
    return res.status(500).json({ message: "Something went wrong." })
  }
}

export default {
  getPrompt,
  getTodaysPrompt
}
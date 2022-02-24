import { Router } from 'express';
//import authController from './controllers/index.js';
//import pageController from './controllers/page.js';
import promptController from "./controllers/promptController.js"
// import authJwt from './util/authJwt.js';

const router = Router();

router.get("/todaysprompt", (req, res) => {promptController.getTodaysPrompt(req, res);});

router.post('/signin', (req, res) => { authController.login(req, res); });

export default router;
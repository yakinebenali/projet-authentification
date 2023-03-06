import express from "express";
import { Login,Register} from "../controllers/Etudiants.js";


const router = express.Router();
router.post('/Login', Login);
router.post('/Register', Register);
export default router;
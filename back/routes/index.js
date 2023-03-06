import express from "express";
import { LoginEtu,RegisterEtu} from "../controllers/Etudiants.js";


const router = express.Router();
router.post('/LoginEtu', LoginEtu);
router.post('/RegisterEtu', RegisterEtu);
export default router;
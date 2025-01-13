import { Router } from "express";
import HistoriesController from "../controllers/histories.controller.js";

const router = Router();

const {
    createHistory,
    getHistories
} = new HistoriesController();

router.get('/', getHistories);

router.post('/', createHistory);

export default router;
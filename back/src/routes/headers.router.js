import { Router } from "express";
import HeadersController from "../controllers/headers.controller.js";

const router = Router();

const {
    getHeaders,
    createHeader
}

    = new HeadersController();

router.get('/', getHeaders);

router.post('/', createHeader);

export default router;
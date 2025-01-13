import { Router } from "express";
import SocialsController from "../controllers/socials.controller.js";

const router = Router();

const {
    getSocials,
    createSocial
} = new SocialsController();

router.get('/', getSocials);

router.post('/', createSocial);

export default router;
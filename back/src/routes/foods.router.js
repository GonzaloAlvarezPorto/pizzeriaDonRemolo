import { Router } from "express";
import FoodsController from "../controllers/foods.controller.js";

const router = Router();

const {
    getFood,
    getFoods,
    createFood,
    updateFood,
    deleteFood
} = new FoodsController();

router.get('/', getFoods);

router.get('/:fid', getFood);

router.post('/', createFood);

// router.put('/:fid', updateFood);

// router.delete('/:fid', deleteFood);

export default router;
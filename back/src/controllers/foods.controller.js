import FoodsDTO from "../dto/foods.dto.js";
import { foodsService } from "../services/service.js";

class FoodsController {
    constructor() {
        this.service = foodsService;
    }

    getFoods = async (req, res) => {
        try {
            const foods = await this.service.getFoods({});
            
            const foodsDTO = foods.map(food => new FoodsDTO(food));

            res.json({ foods: foodsDTO });

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener las comidas' });
        }
    };

    createFood = async (req, res) => {
        const foodsData = req.body;

        const { name, description, imagen, category, novedad = true } = foodsData; // Traer novedad con valor por defecto

        let { price, stock } = foodsData;

        price = Number(price);
        stock = Number(stock);

        if (!name || !description || !imagen || !category || !price || typeof price !== 'number' || isNaN(price) || !stock || typeof stock !== 'number' || isNaN(stock)) {
            return res.status(400).json({
                message: "Todos los campos son obligatorios y deben ser válidos.",
            });
        }

        try {
            const existingFood = await this.service.getFood({ name: foodsData.name });
            if (existingFood) {
                return res.status(400).json({ message: "La comida ya existe" });
            }

            const newFood = await this.service.createFood({ ...foodsData, price, stock, novedad }); // Incluir novedad
            const foodDTO = new FoodsDTO(newFood);

            res.status(201).json({ message: "Comida creada", data: foodDTO });
        } catch (error) {
            res.status(500).json({ error: "Error al crear la comida" });
        }
    };

    getFood = async (req, res) => {
        const { fid } = req.params;

        try {
            const food = await this.service.getFood({ _id: fid });
            if (!food) {
                return res.status(404).json({ error: "Comida no encontrada" })
            }

            const foodDTO = new FoodsDTO(food);

            res.json(foodDTO);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener las comidas' });
        }
    }
}

export default FoodsController;
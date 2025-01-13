import HistoriesDTO from "../dto/histories.dto.js";
import { historiesService } from "../services/service.js";

class HistoriesController {
    constructor() {
        this.service = historiesService;
    }

    getHistories = async (req, res) => {
        try {
            const histories = await this.service.getHistories({});

            const historiesDTO = histories.map(history => new HistoriesDTO(history));

            res.json({ histories: historiesDTO });

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener la historia' })
        }
    }

    createHistory = async (req, res) => {

        const historiesData = req.body;

        const { paragraph } = historiesData;

        let { order } = historiesData;

        if (!paragraph || !order || isNaN(order) || typeof order !== 'number') {
            return res.status(400).json({
                message: "Todos los campos son obligatorios"
            })
        }

        try {
            const existingHistory = await this.service.getHistory({ paragraph: historiesData.paragraph });

            if (existingHistory) {
                return res.status(400).json({ message: "El párrafo ya existe" })
            }

            const newHistory = await this.service.createHistory({ ...historiesData, order });
            const historyDTO = new HistoriesDTO(newHistory);

            res.status(201).json({ message: "Párrafo creado", data: historyDTO });
        } catch (error) {
            res.status(500).json({ error: "Error al crear el párrafo" })
        }

    }
}

export default HistoriesController;
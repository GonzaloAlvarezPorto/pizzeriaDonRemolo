import HeadersDTO from "../dto/headers.dto.js";
import { headersService } from "../services/service.js";

class HeadersController {
    constructor() {
        this.service = headersService;
    }

    getHeaders = async (req, res) => {
        try {
            const headers = await this.service.getHeaders({});

            const headersDTO = headers.map(header => new HeadersDTO(header));

            res.json({ headers: headersDTO });

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener los encabezados' })
        }
    }

    createHeader = async (req, res) => {

        const headersData = req.body;

        const { name, link } = headersData;

        if (!name || !link) {
            return res.status(400).json({
                message: "Todos los campos son obligatorios"
            })
        }

        try {
            const existingHeader = await this.service.getHeader({ name: headersData.name });

            if (existingHeader) {
                return res.status(400).json({ message: "El encabezado ya existe" })
            }

            const newHeader = await this.service.createHeader({ ...headersData });
            const headerDTO = new HeadersDTO(newHeader);

            res.status(201).json({ message: "Encabezado creado", data: headerDTO });
        } catch (error) {
            res.status(500).json({ error: "Error al crear el encabezado" })
        }

    }
}

export default HeadersController;
import SocialsDTO from "../dto/socials.dto.js";
import { socialsService } from "../services/service.js";

class SocialsController {
    constructor() {
        this.service = socialsService;
    }

    getSocials = async (req, res) => {
        try {
            const socials = await this.service.getSocials({})

            const socialsDTO = socials.map(social => new SocialsDTO(social));

            res.json({ socials: socialsDTO })
        }

        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener las redes sociales' })
        }
    }

    createSocial = async (req, res) => {
        const socialsData = req.body;

        const { mediaName, mediaImage, mediaLink } = socialsData;

        if (!mediaName || !mediaImage || !mediaLink) {
            return res.status(400).json({
                message: "Todos los campos son obligatorios"
            })
        }

        try {
            const existingSocial = await this.service.getSocial({ mediaName: socialsData.mediaName });

            if (existingSocial) {
                return res.status(400).json({ message: "La red social ya existe" });
            }

            const newSocial = await this.service.createSocial({ ...socialsData });
            const socialDTO = new SocialsDTO(newSocial);

            res.status(201).json({ message: "Red social creada", data: socialDTO });
        } catch (error) {
            res.status(500).json({ error: "Error al crear la red social" })
        }
    }

    getSocial = async (req, res) => {
        const { sid } = req.params;

        try {
            const social = await this.service.getSocial({ _id: sid });
            if (!social) {
                return res.status(404).json({ error: "Red social no encontrada" })
            }

            const socialDTO = new SocialsDTO(social);

            res.json(socialDTO);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener las redes sociales' });
        }
    }
}

export default SocialsController;
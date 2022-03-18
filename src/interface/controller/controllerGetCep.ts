import { Response, Request, } from 'express'
import cepGetter from '../../use-cases/CepGetter'
export default {
    index: async (req: Partial<Request>, res: Response) => {
    res.status(400).json({ message: "Por favor, verificar paramêtros na rota! (Ex: http://..../getCep/:id)" })
    },
    get: async (req: Partial<Request>, res: Response) => {
        try {
            const payload = req.params as { cep: string }
            const { status, message } = await cepGetter(payload)
            res.status(status).json({ message })
        } catch (e) {
            res.status(500).send("Internal error: " + e)
        }
    }
}
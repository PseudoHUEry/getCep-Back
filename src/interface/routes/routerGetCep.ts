import { Router } from 'express';
import controllerGetCep from '../controller/controllerGetCep';
const router = Router()

router.get('/:cep', controllerGetCep.get)

export default router;

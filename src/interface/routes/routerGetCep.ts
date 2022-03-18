import { Router } from 'express';
import controllerGetCep from '../controller/controllerGetCep';
const router = Router()

router.get('/:cep', controllerGetCep.get)
router.get('/', controllerGetCep.index)


export default router;

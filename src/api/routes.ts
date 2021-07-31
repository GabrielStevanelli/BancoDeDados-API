import { Router } from 'express';
import { deleteRecados, getRecados, postRecados, putRecados } from './app/Controllers/RecadosController';
const router = Router();

router.get('/listar',getRecados);
router.post('/adicionar',postRecados);
router.put('/mudar/:id', putRecados);
router.delete('/apaga/:id',deleteRecados)


export default router;

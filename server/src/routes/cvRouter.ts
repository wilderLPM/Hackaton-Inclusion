import { Router } from 'express';
import { findAll, findOne, created, updated, updatedPut, deleteOne } from '../controller/cvController.js';
import { parseIntParamId } from '../middleware/parseIntParamId.js';

const cvRouter: Router = Router();

cvRouter
  .get('/', findAll)
  .get('/:id', parseIntParamId,findOne)
  .post('/created', created)
  .patch('/updated/:id', parseIntParamId,updated)
  .put('/updated/:id', parseIntParamId,updatedPut)
  .delete('/:id', parseIntParamId,deleteOne);

export default cvRouter;

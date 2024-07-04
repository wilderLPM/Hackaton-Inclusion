import CvModels from '../models/CvModels.js';

const cvModels: CvModels = new CvModels();

export const findAll = (_req: any, res: any) => cvModels.findAll().then((result) => res.status(200).json({
  message: 'OK',
  data: result,
  status: res.statusCode
}));
export const findOne = (req: any, res: any) => {
  cvModels.findOne(req.params.id).then((result) => res.status(200).json({
    message: 'OK',
    data: result,
    status: res.statusCode
  }))
}
export const created = (req: any, res: any) => cvModels
  .createOne(req.body)
  .then(() => res.status(201).json({message: 'Created', status: res.statusCode}));

export const updated = (req: any, res: any) => {
  cvModels.patchOne(req.body, req.params.id).then(() => res.status(301).json({message: 'Updated', status: res.statusCode}));
}
export const updatedPut = (req: any, res: any) => {
  cvModels.putOne(req.body, req.params.id).then(() => res.status(301).json({message: 'Updated', status: res.statusCode}));
}
export const deleteOne = (req: any, res: any) => {
  cvModels.deleteOne(req.params.id).then(() => res.status(201).json({message: 'Deleted', status: res.statusCode}));
}
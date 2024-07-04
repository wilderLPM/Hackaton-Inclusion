import CvModels from '../models/CvModels.js';
const cvModels = new CvModels();
export const findAll = (_req, res) => cvModels.findAll().then((result) => res.status(200).json({
    message: 'OK',
    data: result,
    status: res.statusCode
}));
export const findOne = (req, res) => {
    cvModels.findOne(req.params.id).then((result) => res.status(200).json({
        message: 'OK',
        data: result,
        status: res.statusCode
    }));
};
export const created = (req, res) => cvModels
    .createOne(req.body)
    .then(() => res.status(201).json({ message: 'Created', status: res.statusCode }));
export const updated = (req, res) => {
    cvModels.patchOne(req.body, req.params.id).then(() => res.status(301).json({ message: 'Updated', status: res.statusCode }));
};
export const updatedPut = (req, res) => {
    cvModels.putOne(req.body, req.params.id).then(() => res.status(301).json({ message: 'Updated', status: res.statusCode }));
};
export const deleteOne = (req, res) => {
    cvModels.deleteOne(req.params.id).then(() => res.status(201).json({ message: 'Deleted', status: res.statusCode }));
};
//# sourceMappingURL=cvController.js.map
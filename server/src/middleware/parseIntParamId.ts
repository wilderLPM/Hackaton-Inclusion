export const parseIntParamId = (req: any, _res: any, next: any) => {
  req.params.id = parseInt(req.params.id);
  return next();
};
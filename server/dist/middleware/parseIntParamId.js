export const parseIntParamId = (req, _res, next) => {
    req.params.id = parseInt(req.params.id);
    return next();
};
//# sourceMappingURL=parseIntParamId.js.map
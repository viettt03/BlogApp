
const { check, validationResult } = require('express-validator');

exports.postValidator = [
    check('title').trim().not().isEmpty().withMessage("Post title is missing!"),
    check('content').trim().not().isEmpty().withMessage("Post content is missing!"),
    check('meta').trim().not().isEmpty().withMessage("Post meta is missing!"),
    check('slug').trim().not().isEmpty().withMessage("Post slug is missing!"),
    check('tags').isArray().withMessage("Post tags is missing!").custom((tags) => {
        for (let t of tags) {
            if (typeof t !== 'string') {
                throw Error("Tags must be array of strings!");
            }
        }
        return true;
    }),
];

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
    if (error.length) {
        res.status(401).json({ error: error[0].msg });
    }
    next();
}
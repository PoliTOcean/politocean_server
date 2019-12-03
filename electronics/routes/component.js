import { Router } from "express";

var ObjectId = require('mongoose').Types.ObjectId;

const router = Router();

var getComponents = async (req, res) => {
    const query = req.context.models.Component.find();

    try {
        const results = await query;
        return res.status(200).send({ results: results });
    } catch (_) {}

    return res.status(400).send({ error: "Some error"});
}

var getComponentById = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: "Invalid component ID" });
    }

    const query = req.context.models.Component.findById(req.params.id);
    
    try {
        const result = await query;
        return res.status(200).send({ result: result });
    } catch (_) {}

    return res.status(400).send({ error: "Some error" });
}

router.get('/', getComponents);
router.get('/:id', getComponentById);

export default router;
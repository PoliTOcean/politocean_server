import { Router } from "express";

const router = Router();

var getComponents = async (req, res) => {
    const query = req.context.models.Component.find();

    try {
        const results = await query;
        return res.status(200).send({ results: results });
    } catch (_) {}

    return res.status(400).send({ error: "Some error"});
}

router.get('/', getComponents);

export default router;
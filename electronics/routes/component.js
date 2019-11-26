import { Router } from "express";

const router = Router();

var getComponents = async (req, res) => {
    const query = req.context.models.Component.find();
    const results = await query;

    return res.status(200).send({ results: results });
}

router.get('/', getComponents);

export default router;
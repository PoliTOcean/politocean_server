import { Router } from "express";

var ObjectId = require('mongoose').Types.ObjectId;

const router = Router();

var getComponents = async (req, res) => {
    const query = (req.query.search)
        ? req.context.models.Component.find({ 
            $or: [
                { name: { "$regex": req.query.search, "$options": "i" }},
                { category: { $regex: req.query.search, $options: "i" }},
                { package: { $regex: req.query.search, $options: "i" }}
            ]})
        : req.context.models.Component.find();

    try {
        const results = await query;
        return res.status(200).send({ results: results });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var newComponent = async (req, res) => {
    try {
        let component = new req.context.models.Component(req.body);
        await component.validate();

        const result = await component.save();

        return res.status(200).send({ result: result });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var getComponentById = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: "Invalid component ID" });
    }

    const query = req.context.models.Component.findById(req.params.id);
    
    try {
        const result = await query;
        return res.status(200).send({ result: result });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var updateComponentById = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: "Invalid component ID" });
    }

    const query = req.context.models.Component.update({ _id: req.params.id }, req.body);

    try {
        const result = await query;
        return res.status(200).send({ result: result });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var deleteComponentById = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: "Invalid component ID" });
    }
    
    /**
     * TODO: Check user's privilege.
     * The main idea is to send as body the current user model to check if he has the right permissions
     */
}

router.get('/', getComponents);
router.post('/', newComponent);

router.get('/:id', getComponentById);
router.put('/:id', updateComponentById);
router.delete('/:id', deleteComponentById);

export default router;
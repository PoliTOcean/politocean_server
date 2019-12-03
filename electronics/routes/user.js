import { Router } from 'express';

const router = Router();

var getUsers = async (req, res) => {
    const query = (req.query.search)
        ? req.context.models.Component.find({ 
            $or: [
                { _id: { $regex: req.query.search, $options: "i" }},
                { firstName: { "$regex": req.query.search, "$options": "i" }},
                { lastName: { $regex: req.query.search, $options: "i" }},
                { email: { $regex: req.query.search, $options: "i" }}
            ]})
        : req.context.models.Component.find();

    try {
        const results = await query;
        return res.status(200).send({ results: results });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var newUser = async (req, res) => {
    try {
        let user = new req.context.models.User(req.body);
        await user.validate();

        const result = await user.save();

        return res.status(200).send({ result: result });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var getUserById = async (req, res) => {
    if (Number.isInteger(req.params.id)) {
        return res.status(400).send({ error: "Invalid user ID" });
    }

    const query = req.context.models.User.findById(req.params.id);
    
    try {
        const result = await query;
        return res.status(200).send({ result: result });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var updateUserById = async (req, res) => {
    if (Number.isInteger(req.params.id)) {
        return res.status(400).send({ error: "Invalid user ID" });
    }

    const query = req.context.models.User.update({ _id: req.params.id }, req.body);

    try {
        const result = await query;
        return res.status(200).send({ result: result });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

var deleteUserById = async (req, res) => {
    if (Number.isInteger(req.params.id)) {
        return res.status(400).send({ error: "Invalid user ID" });
    }
    
    /**
     * TODO: Check user's privilege.
     * The main idea is to send as body the current user model to check if he has the right permissions
     */
}

router.get('/', getUsers);
router.post('/', newUser);

router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;
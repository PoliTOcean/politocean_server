import { Router } from 'express';

const router = Router();

var authByEmailAndPassword = async (req, res) => {
    if (!req.body.email) {
        return res.status(400).send({ error: "Auth email is not defined." });
    }

    if (!req.body.password) {
        return res.status(400).send({ error: "Auth password is not defined" });
    }

    const query = req.context.models.User.findOne({ email: req.body.email, password: req.body.password });
    
    try {
        const result = await query;
        res.status(200).send({ result: result });
    } catch (e) {
        res.status(400).send({ error: e });
    }
}

router.post('/', authByEmailAndPassword);

export default router;
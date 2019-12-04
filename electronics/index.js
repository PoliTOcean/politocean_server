import express from 'express';
import routes from './routes';
import models from './models';

const electronics = express();

electronics.use(express.json());
electronics.use(express.urlencoded({ extended: true }));

electronics.use(async (req, res, next) => {
    req.context = { models };
    next();
});

electronics.get('/', (req,res) => res.status(200).send('Hello, World'));
electronics.use('/components', routes.components);
electronics.use('/users', routes.users);
electronics.use('/auth', routes.auth);

export default electronics;
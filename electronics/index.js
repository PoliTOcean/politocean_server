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

electronics.use('/component', routes.component);

export default electronics;
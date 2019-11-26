import express from 'express';
//TODO: import routes from './routes';
//TODO: import models from './models';

const mining = express();

mining.use(express.json());
mining.use(express.urlencoded({ extended: true }));

/**
 * TODO:

mining.use(async (req, res, next) => {
    req.context = { models };
    next();
});
 */

export default mining;
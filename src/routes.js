import { Router } from 'express';

import helloController from './controller/helloController';
import userController from './controller/userController';

const routes = new Router()

routes.get('/hello', helloController.index);

routes.get('/users', userController.index);

routes.get('/users/:id', userController.show);

routes.post('/users', userController.create);

routes.put('/users', userController.update);

routes.delete('/users/:id', userController.destroy)

export default routes;

import express from 'express';
import APIcontroller from '../controller/APIcontroller.js';
let router = express.Router();

const initAPIRouter = (app) => {
    router.get('/users', APIcontroller.getAllUser);
    router.post('/create-user', APIcontroller.createUser);
    router.get('/users/:id', APIcontroller.oneUser);
    router.put('/update-user', APIcontroller.updateUser);
    return app.use('/api/v1/', router);

}
export default initAPIRouter;
// file router để lấy data từ server
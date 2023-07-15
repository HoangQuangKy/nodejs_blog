import express from 'express';
import APIcontroller2 from '../controller/APIcontroller2.js';
let router = express.Router();

const initAPIRouter2 = (app) => {
    router.get('/account', APIcontroller2.getAllAcount);
    router.post('/create-account', APIcontroller2.creatnewAccount)
    return app.use('/api/v1/', router);

}
export default initAPIRouter2;
// file router để lấy data từ server
import express from 'express';
import homeController from '../controller/homeController.js';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get(`/Edit-user/:id`, homeController.editUser);
    router.post(`/update-user`, homeController.updateUser);
    router.get('/name', (req, res) => {
        res.send('Day la Quang Ky');
    })
    router.get('/login', homeController.getLogin);
    router.post('/login', homeController.login);
    return app.use('/', router);

}
export default initWebRoute;
// file router để lấy data từ server
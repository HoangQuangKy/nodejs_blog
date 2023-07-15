import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import 'dotenv/config'
import initWebRoute from './route/web.js';
import pool from './configs/connectDB.js';
import initAPIRouter from './route/API.js';
import initAPIRouter2 from './route/API2.js';
import creatToken from './middlewear/JWTAction.js';
import Connection from './configs/connectDB.js'

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//set up 
configViewEngine(app);
initWebRoute(app);
initAPIRouter(app);
initAPIRouter2(app);
creatToken(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// dành cho upload server
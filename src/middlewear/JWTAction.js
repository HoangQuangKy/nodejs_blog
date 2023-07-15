import 'dotenv/config';
import jwt from 'jsonwebtoken';
const creatToken = () => {
    let payload = { name: 'Ky', address: 'Hai Phong' };
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log(token)
    return token;
}
export default creatToken
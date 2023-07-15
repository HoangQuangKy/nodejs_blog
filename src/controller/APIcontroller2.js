import pool from "../configs/connectDB.js";
let getAllAcount = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM account');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
let creatnewAccount = async (req, res) => {
    let { account, password } = req.body;
    if (!account || !password) {
        return res.status(200).json({
            message: 'missing'
        })
    }
    await pool.execute('insert into account(account,password) value(?, ?)', [account, password])
    return res.status(200).json({
        message: 'ok'
    })
}
export default {
    getAllAcount,
    creatnewAccount
}
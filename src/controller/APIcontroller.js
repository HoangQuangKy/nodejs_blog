import pool from "../configs/connectDB.js";
let getAllUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let oneUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'missing id',
        })
    }
    let user = await pool.execute(`select * from users where id = ?`, [userId])
    return res.status(200).json({
        Id: user[0]
    })
}
let createUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing',
        })
    }
    await pool.execute('insert into users(firstName,lastName,email,address) value(?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.status(200).json({
        message: 'ok',
    })
}
let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing',
        })
    }
    await pool.execute(`UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ? `, [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: 'ok',
    })
}
export default {
    getAllUser,
    createUser,
    oneUser,
    updateUser,
}
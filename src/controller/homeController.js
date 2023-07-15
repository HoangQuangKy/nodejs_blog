import { render } from "ejs";
import pool from "../configs/connectDB.js";

let getHomePage = async (req, res) => {
    let data = [];
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    console.log(rows)
    return res.render('index.ejs', { dataUser: rows });
};
let getDetailPage = async (req, res) => {
    console.log('check param:', req.params)
    let userId = req.params.id;
    let user = await pool.execute(`select * from users where id = ?`, [userId])
    return res.send(user[0])
};
let createNewUser = async (req, res) => {
    console.log('check body', req.body)
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName,lastName,email,address) value(?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let userId = req.body.id;
    await pool.execute(`DELETE FROM users where id = ?`, [userId])
    return res.redirect('/');

}
let editUser = async (req, res) => {
    console.log('check param:', req.params)
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId])
    return res.render('update-user.ejs', { dataUser: user[0] })
}
let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute(`UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ? `, [firstName, lastName, email, address, id]);
    return res.redirect('/');
}
let getLogin = async (req, res) => {
    return res.render('login.ejs')
}
let login = async (req, res) => {
    let { username, password } = req.body;
    console.log("check account:", req.body);
    try {
        const [rows, fields] = await pool.execute('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password])
        if (rows.length > 0) {
            console.log(rows);
            res.send('Login successful!');
        }
        else {
            res.send('Invalid username or password');
        }
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
    }
}

export default {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUser,
    updateUser,
    login,
    getLogin
};
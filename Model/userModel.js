import {db} from "../Db/db.js";

const table = "user";

class userModel{

    static async createUser(name, email, password){
        const sql =`INSERT INTO ${table} (name, email, password) VALUES (?,?,?)`;

        const [result] = await db.execute(sql,[name, email, password])

        return result.insertID;
    }

    static async getAllUserModel(){
        const sql = `SELECT * FROM ${table}`
        const [rows] = await db.execute(sql);
        return rows;
    }

    static async UpdateUserModel(id,{password}){
        const sql = `UPDATE ${table} SET password=? WHERE id=?`
        const [update] = await db.execute(sql,[password,id])
        return update.affectedRows;
    }

    static async DeleteUserModel(id){
        const sql = `DELETE FROM ${table} WHERE id =?`
        const [del] = await db.execute(sql,[id])
        return del.affectedRows;
    }
}

export default userModel
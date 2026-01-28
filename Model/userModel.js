import {db} from "../Db/db.js";

const table = "user";

class userModel{

    static async createUser(name, email, password){
        const sql =`INSERT INTO ${table} (name, email, password) VALUES (?,?,?)`;

        const [result] = await db.execute(sql,[name, email, password])

        return result.insertID;
    }
}

export default userModel
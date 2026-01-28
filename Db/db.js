// connectivity code server -->db

import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();

export const db = mysql.createPool({  //helps to maintain multiple connections
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB,
    port: process.env.SQL_PORT,
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit:0
})

const connectionDB = async () => {
    try{
        const connection = await db.getConnection();
        console.log("Db connection successful");
        connection.release()
    }
    catch(err){
        console.error("connection is not established", err);
        process.exit(1);
    }

}
export default connectionDB;
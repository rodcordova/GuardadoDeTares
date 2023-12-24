import {createPool} from 'mysql2/promise';
import {DB_HOST,DB_PASS,DB_DATABASE,DB_USER,DB_PORT} from "./config.js"
export const pool=createPool({
    host:"localhost",
    user:"root",
    password:"root1234",
    port:3306,
    database:"tasksdata" //database
})
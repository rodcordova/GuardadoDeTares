import {Router} from "express"
import { getAllTask,getTask,createTask,deleteTask,updateTask } from "../controllers/task.controller.js";
const router =Router();
// base de datos
//const connection = require('../db'); // Importa la conexión

router.get('/tasks',getAllTask)

router.get('/tasks/:id',getTask)

router.post('/tasks',createTask)

router.delete('/tasks/:id',deleteTask)

router.put('/tasks/:id',updateTask)

export default router
//module.exports=router
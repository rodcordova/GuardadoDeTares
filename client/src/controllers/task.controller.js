import { pool } from '../db.js';


export const getAllTask=async (req,res)=>{ // OBTENER
    // Ejemplo de consulta a la base de datos utilizando async/await
   //try {
    const [rows]=await pool.query("SELECT *FROM task ")
    res.json(rows)
    console.log(rows)
   //} catch (error) {
   //    console.log(error)
   //    next(error)
   //}
    //console.log("hace bien")
    //res.send("hace mejor")
    
}
export const getTask=async(req,res)=>{ // OBTENER UNA TAREA
    const [rows]=await pool.query("SELECT *FROM task WHERE id=?",[req.params.id])

    if(rows.length<=0) return res.status(404).json({message:"Employe not found"})

    res.json(rows[0]);
}

export const createTask=async(req,res,next)=>{// CREAR
    const {title,description}=req.body
    
    try{
        const [rows]=await pool.query("INSERT INTO task(title,description) VALUES(?,?) ",[title,description])
        res.send({
            id:rows.insertId,
            title,
            description
        });
    }catch(error){
        console.log(error)
        next(error)
        //res.json({error:error.body})
    }
}

export const deleteTask=async(req,res)=>{// ELIMINAR
    const [result]=await pool.query("DELETE FROM task WHERE id=?",[req.params.id])
    console.log(result)

    if(result.affectedRows<=0) return res.status(404).json({message:"Employed not found"})
    
    res.sendStatus(204);
}

export const updateTask=async(req,res)=>{ // ACTUALIZAR
    const {id}=req.params
    const {title,description}=req.body

    const [result]=await pool.query("UPDATE task SET title=IFNULL(?,title),description=IFNULL(?,description) WHERE id=?",[title,description,id])

    if(result.affectedRows<=0) return res.status(404).json({message:"Employed not found"})

    const [rows]=await pool.query("SELECT *FROM task WHERE id=?",[id])

    res.json(rows[0]);
}
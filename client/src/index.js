//const express =require('express');
import express from "express"
import morgan from "morgan"
//const morgan =require("morgan");

import taskRoutes from './routes/task.routes.js';
import {PORT} from "./config.js"

import cors from "cors"

const app=express();

app.use(cors());
app.use(express.json())// para que reciba pedidos json
app.use(morgan('dev'))// ver por consola las peticiones que van llegando


app.use(taskRoutes)

app.use((err,req,res,next)=>{
    return res.json({message:"err.message"})
})

//1. Se genera permiso al Front para acceder al Back
//app.use((req, res, next) => {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Credentials", "true");
//    res.header(
//        "Access-Control-Allow-Headers",
//        "Origin, X-Requested-With, Content-Type, Accept"
//    );
//    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//    next();
//});

app.listen(PORT)
console.log('server on port ',PORT)
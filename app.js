const express = require('express');
// const mysql = require('mysql');

const app = express();


//Create connection


//  const db = mysql.createConnection({
    
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'MySQL'

//  })
//  console.log(db)


//   db.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     concole.log('MySQL is connecting')
// })


//Create db

// app.get( (req, res)=>{
//     let sql = 'CREATE DATABASE MYSQL';
//     db.query(sql, (err, result)=>{
//         if (err) throw err;
//         console.log(result)
//         res.send('Database created...')
//     })
// })

// app.use((req, res, next) => {//Pour éviter l'erreur CORS = méthode de sécurité par défaut (bloque les appels HTTP d'être effectués entre des serveurs différents) //Configurer les bons headers 
//     res.setHeader('Access-Control-Allow-Origin', '*');//Accés à l'API depuis n'importe quelle origine
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//Ajouter les Headers mentionnés aux requêtes
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//Pour rendre possible l'envoie des requêtes avec les méthodes mentionnées(get,post...)
//     next();
//   });


module.exports = app;

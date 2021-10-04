const express = require('express');
const userRoutes = require('./routes/user');
const publicationsRoutes = require('./routes/publications');
const mysql = require('mysql');
const path = require('path');

const app = express();


//Create connection


 const db = mysql.createConnection({
    
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'Groupomania',
    socketPath : "/Applications/MAMP/tmp/mysql/mysql.sock"
    
    

})
 console.log(db)


db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connecté à mysql' );
  });

// Create db

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



app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/publications', publicationsRoutes);
app.use('/api/auth', userRoutes);
app.use('/', (req, res, next) => { res.send('hello') });

module.exports = app;

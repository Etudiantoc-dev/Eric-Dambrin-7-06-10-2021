const express = require('express');
const userRoutes = require('./routes/utilisateur');
const publicationsRoutes = require('./routes/publication');
const path = require('path');
const app = express();


app.use((req, res, next) => {//Pour éviter l'erreur CORS = méthode de sécurité par défaut (bloque les appels HTTP d'être effectués entre des serveurs différents) //Configurer les bons headers 
    res.setHeader('Access-Control-Allow-Origin', '*');//Accés à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//Ajouter les Headers mentionnés aux requêtes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//Pour rendre possible l'envoie des requêtes avec les méthodes mentionnées(get,post...)
    next();
  });


app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/publications', publicationsRoutes);
app.use('/api/auth', userRoutes);
app.use('/', (req, res, next) => { res.send('hello') });


module.exports = app;







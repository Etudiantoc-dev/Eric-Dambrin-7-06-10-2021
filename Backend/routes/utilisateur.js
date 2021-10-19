const express = require('express');
const router = express.Router(); //Méthode router
const userCtrl = require('../controllers/utilisateur');

router.post('/signup', userCtrl.signup); //Route Post car le frontend enverra des informations également adresse mail et mot de passe
router.post('/login', userCtrl.login);
router.get('/:id', userCtrl.login);
module.exports = router;







const express = require('express');
const router = express.Router();//methode routeur d'express pour faire router.post au lieu de app.post par exemple
const publicationsCtrl = require('../controllers/publication');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer.config');

router.post('/', auth, multer, publicationsCtrl.createPublication);//Création 
router.get('/:id', auth, publicationsCtrl.getOnePublication);
router.get('/', auth, publicationsCtrl.getAllPublications);
router.put('/:id', auth, multer, publicationsCtrl.modifyPublication); // Modification
router.delete('/:id', auth, publicationsCtrl.deletePublication);//suppression 
// router.post('/:id/like', auth, publicationsCtrl.likeSauce);

module.exports = router;
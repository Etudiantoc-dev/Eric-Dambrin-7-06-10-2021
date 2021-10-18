const express = require('express');
const router = express.Router();//methode routeur d'express pour faire router.post au lieu de app.post par exemple
const publicationsCtrl = require('../controllers/publication');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer.config');

router.post('/', multer, publicationsCtrl.createPublication);//Création 
router.get('/:id', publicationsCtrl.getOnePublication);
router.get('/', publicationsCtrl.getAllPublications);
router.put('/:id', multer, publicationsCtrl.modifyPublication); // Modification
router.delete('/:id', publicationsCtrl.deletePublication);//suppression 
// router.post('/:id/like', auth, publicationsCtrl.likeSauce);

module.exports = router;

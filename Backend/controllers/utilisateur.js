const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const User = require('../models/utilisateur');


exports.signup = (req, res, next) => { //création ok sans le hash mais null partout???
  bcrypt.hash(req.body.password, 10) 
    .then(hash => { 

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const user = new User({ 

    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: hash
  });
  User.create(user, (err, data) => {
    if (err) {
      if (!user) { // ???
        return res.status(401).json({ error });
      }
    }
    res.send(data);
    console.log(data + 'Compte créé !');
  })})
  
}

exports.login =(req, res, next) => { // Permet aux utilisateurs existant de se connecter(vérification des informations)
  User.findOne({ email: req.body.email })//Vérification si email inscrit correspond à un utilisateur existant
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)//comparaison entre le mot de passe envoyé et le hash enregistré dans l'inscription
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({ // Requète réussi
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET', // Clef secrete de l'encodage
              { expiresIn: '24h' } // L'ajout du TOKEN permet de sécuriser que la création d'un objet ne soit pas modifiable par un autre utilisateur
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })}

 












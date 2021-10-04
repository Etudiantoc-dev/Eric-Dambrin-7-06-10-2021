const fs = require("fs"); //= file System 
const Publication = require("../models/publications");

exports.createPublication = (req, res, next) => {
  const publicationObject = JSON.parse(req.body.publication);
  const publication = new Publication({
    ...publicationObject, //Spread = raccourci pour accéder au corp (shéma sauce ici) de la requète et évite de tout énumérer
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

  });
  publication.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }));

};
exports.getOnePublication = (req, res, next) => {//récupération d'un Objet
  Sauce.findOne({ _id: req.params.id })// Methode findOne pour trouver un seul objet
    .then(publication => res.status(200).json(publication))//reponse
    .catch(error => res.status(404).json({ error }));//si erreur

}
exports.getAllPublications = (req, res, next) => {
  Sauce.find() // Pour récupérer toutes les sauces enregistrés dans la base de donné
    .then(
      (sauces) => {
        res.status(200).json(publications);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};
exports.modifyPublication = (req, res, next) => {
  const publicationObject = req.file ?
    {
      ...JSON.parse(req.body.publication),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Publication.updateOne({ _id: req.params.id }, { ...publicationObject, _id: req.params.id })// 1er argument(quel objet on modifie) 2eme argument(nouvelle version de l'objet)
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));

}
exports.deletePublication = (req, res, next) => {
  Publication.findOne({ _id: req.params.id })
    .then(publication => {
      const filename = publication.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Publication.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));

};
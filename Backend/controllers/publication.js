const fs = require("fs"); //= file System 
const Publication = require("../models/publication");

exports.createPublication = (req, res, next) => {
  // const publication = JSON.parse(req.body.publication);
  if (!req.body.publication) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  
     const publication = new Publication({
      ...Publication,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file}`
     });
     
  
 
  Publication.create(publication, (err, data) => {
    
    if (err)
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Customer."
    });
  else res.send(data);
});


  
  next()
  
}


exports.getOnePublication = (req, res, next) => {//récupération d'un Objet
  Publication.findOne((err, data)=>{// Methode findOne pour trouver un seul objet
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Customer."
    });
  else res.send(data);
});
}

exports.getAllPublications = (req, res, next) => {
  Publication.find( (err, data) =>{
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Customer."
    });
  else res.send(data);
});
  } // Pour récupérer toutes les publications
    
      
    



exports.modifyPublication = (req, res, next) => {
  const publicationObject = req.file ?
    {...JSON.parse(req.body.publication),
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


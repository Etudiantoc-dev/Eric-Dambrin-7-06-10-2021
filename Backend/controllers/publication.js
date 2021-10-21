const fs = require("fs"); //= file System 
const Publication = require("../models/publication");
const db = require ("../Config/db")
exports.createPublication = (req, res, next) => {//?????????????
 
     
  db.query(`INSERT INTO publication VALUES ( '${req.params.id}','${req.body.titre}', '${req.body.article}','${req.body.image}')`, (error) => {
    if (error) {
        return res.status(400).json({
            error
        });
    }
    return res.status(201).json({
        message: 'Votre post à été publié !'
    })
});
};
  

exports.getOnePublication = (req, res, next) => {//ok
  db.query(`SELECT * FROM publication WHERE publication.id = ${req.params.id}`, (error, result, field) => {
    if (error) {
        return res.status(400).json({
            error
        });
    }
    return res.status(200).json(result);
});
};

exports.getAllPublications = (req, res, next) => {//ok
  Publication.find((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
}

exports.modifyPublication = (req, res, next) => {//????????
  const publicationObject = req.file ?
    {
      ...JSON.parse(req.body.publication),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Publication.updateOne({ _id: req.params.id }, { ...publicationObject, _id: req.params.id })// 1er argument(quel objet on modifie) 2eme argument(nouvelle version de l'objet)
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));

}

exports.deletePublication = (req, res, next) => {//ok
  let postID = req.params["id"];
  let sqlDelete = `DELETE FROM publication WHERE publication.id = ${req.params.id}`;
  db.query(sqlDelete, function(error) {
      if (error) {
          return res.status(500).json(error);
      } else {
          return res.status(200).json({
              message: "Publication supprimée"
          });
      }
  })
};




const fs = require("fs"); //= file System 
const Publication = require("../models/publication");
const db = require("../Config/db")

exports.createPublication = (req, res, next) => {//ligne 9 status de undefined??

  db.query(`INSERT INTO publication VALUES ('${req.body.id}','${req.body.prenom}', '${req.body.commentaire}','${req.body.multimedia}')`, (error,res,field) => {
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

exports.modifyPublication = (req, res, next) => {//ok
  db.query(`UPDATE publication SET prenom= '${req.body.prenom}', commentaire = '${req.body.commentaire}' WHERE publication.id = ${req.params.id}`, (error, result, field) => {
    if (error) { 
      return res.status(400).json({
        error
      });
    }
    return res.status(200).json(result); 
  });
};

exports.deletePublication = (req, res, next) => {//ok
  let postID = req.params["id"];
  let sqlDelete = `DELETE FROM publication WHERE publication.id = ${req.params.id}`;
  db.query(sqlDelete, function (error) {
    if (error) {
      return res.status(500).json(error);
    } else {
      return res.status(200).json({
        message: "Publication supprimée"
      });
    }
  })
};




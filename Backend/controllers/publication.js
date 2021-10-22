const fs = require("fs"); //= file System 
const Publication = require("../models/publication");
const db = require ("../Config/db")

exports.createPublication = (req, res, next) => {//?????????????
  let publication = req.body;
  db.query(`INSERT INTO publication VALUES ( '${req.params.id}','${publication.titre}', '${publication.article}','${publication.image}')`, (error) => {
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
  db.query(`UPDATE publication SET titre = '${req.body.titre}', article = '${req.body.article}' WHERE publication.id = ${req.params.id}`, (error, result, field) => {
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




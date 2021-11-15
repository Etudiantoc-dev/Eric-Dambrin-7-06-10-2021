const db = require('../Config/db');


// class Publication {
//     constructor(id, titre, article, image) {
//         this.id = id;
//         this.titre = titre;
//         this.article = article;
//         this.image = image;
//     }
const Publication = function (titre,article,image){
    this.prenom =prenom ;
    this.commentaire = commentaire;
    this.multimedia = multimedia;
}
Publication.createPublication= function(publication, result){
    db.query(`INSERT INTO publication (prenom, commentaire, multimedia, utilisateur_id) VALUES('${publication.prenom}', '${publication.commentaire}','${publication.multimedia}',111)`, function(error,res) {
      if (error) {
        result(error, null);
      } else {
        result(null,res);
      }
    })};
    
    Publication.find = (Publication) =>{
        db.query("SELECT * FROM publication", Publication,(err, res)=>{
            if (err) throw err;
                console.log(res);
         })
        
    }
    Publication.findOne = (publication) =>{
        db.query("SELECT * FROM publication WHERE ID " , publication,(err, res)=>{
            if (err) throw err;
                console.log(res);
        
         })
        }
    Publication.updateOne =(publicationModify) =>{
        db.query("UPDATE publication SET ? ", publicationModify, (err,res)=>{
            if (err) throw err;
            console.log(res);

         })

        }
    Publication.deleteOne = (publicationDelete)=>{
        db.query("DELETE FROM publication WHERE id", publicationDelete, (err,res)=>{
            if (err) {
                throw err;
             }
             return (res);
         })
        
    }


        


module.exports = Publication




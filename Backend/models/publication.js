const db = require('../Config/db');


// class Publication {
//     constructor(id, titre, article, image) {
//         this.id = id;
//         this.titre = titre;
//         this.article = article;
//         this.image = image;
//     }
const Publication = function (publication){
    this.titre = publication.titre;
    this.article = publication.article;
    this.image = publication.image
}
    Publication.create = (newPublication, result) => {
        db.query("INSERT INTO publication SET ?", newPublication, (err, res) => {

            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("created publication: ", { id: res.insertId, ...newPublication });
            result(null, { id: res.insertId, ...newPublication });
        })
    }
    Publication.find = (Publication, callback) =>{
        db.query("SELECT * FROM publication", Publication,(err, res)=>{
            if (err) throw err;
                console.log(res);
         })
        
    }
    Publication.findOne = (Publication, callback) =>{
        db.query("SELECT * FROM publication WHERE id", Publication,(err, res)=>{
            if (err) throw err;
                console.log(res);
        
         })
        }
    Publication.updateOne =(publicationModify,callback) =>{
        db.query("UPDATE publication", publicationModify, (err,res)=>{
            if (err) {
                throw err;
             }
             return callback(res);
         })}
    Publication.deleteOne = (publicationDelete, callback)=>{
        db.query("DELETE * FROM publication", publicationDelete, (err,res)=>{
            if (err) {
                throw err;
             }
             return callback(res);
         })
        
    }
        


module.exports = Publication


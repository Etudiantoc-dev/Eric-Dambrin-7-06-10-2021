const db = require('../config/db');


class Publication {
    constructor(id, titre, article, image) {
        this.id = id;
        this.titre = titre;
        this.article = article;
        this.image = image;
    }
    create(newPublication, callback) {
        db = newPublication.query("INSERT INTO publication", newPublication, (err, res) => {

            if (err) {
               throw err;
            }
            return callback(res);
        })
    }
    find(Publication, callback){
        db = Publication.query("SELECT * FROM publication", Publication,(err, res)=>{
            if (err) {
                throw err;
             }
             return callback(res);
         })
        
    }
    updateOne(publicationModify,callback){
        db = publicationModify.query("UPDATE publication", publicationModify, (err,res)=>{
            if (err) {
                throw err;
             }
             return callback(res);
         })}
    deleteOne(publicationDelete, callback){
        db = publicationDelete.query("DELETE * FROM publication", publicationDelete, (err,res)=>{
            if (err) {
                throw err;
             }
             return callback(res);
         })
        
    }
        

}
module.exports = Publication


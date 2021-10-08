const db = require('../config/db');
const mysql = require('mysql');

class Publication {
    constructor(id, titre, article, image) {
        this.id = id;
        this.titre = titre;
        this.article = article;
        this.image = image;
    }
    create(newUser, res) {
        db = newPublication.query("INSERT INTO publication", (err, res) => {

            if (err) {
                console.log({ error });
                result(err, null);
                return;
            }
            console.log('publication créé');
            result(null, { id: res.id, ...newUser });
        })
    }
}
module.exports = Publication


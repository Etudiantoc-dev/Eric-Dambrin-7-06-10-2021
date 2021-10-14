
const db = require('../config/db');

class User {
    constructor( nom, prenom, email, password) {
        // this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
    }


    create(newUser, callback) {
        db = newUser.query("INSERT INTO utilisateur",newUser,(err, res) => {
                if (err) {
                    throw err;
                }
                return callback(res);
            })
    }
}


module.exports = User
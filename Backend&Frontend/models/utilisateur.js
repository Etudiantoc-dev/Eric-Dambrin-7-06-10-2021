
const db = require('../Config/db');

// class User {
//     constructor(nom, prenom, email, password) {
//         // this.id = id;
//         this.nom = nom;
//         this.prenom = prenom;
//         this.email = email;
//         // this.password = password;
//     }

const User = function(user){
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.email = user.email;
};
    User.create = (newUser, result) =>{
        db.query("INSERT INTO utilisateur SET ?", newUser, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("created utilisateur: ", { id: res.insertId, ...newUser });
            result(null, { id: res.insertId, ...newUser });
        })

    }
    









module.exports = User
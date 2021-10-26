
const db = require('../Config/db');



const User = function (user) {

    this.nom = user.nom;
    this.prenom = user.prenom;
    this.email = user.email;
    this.password = user.password;
};
User.create = (newUser, result) => {
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
User.findOne = (newUser) => {
    db.query("SELECT * FROM utilisateur WHERE id", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);

            return;
        }

        if (res.length) {
            console.log("found newUser: ", res[0]);

            return;
        }
    })


};

module.exports = User
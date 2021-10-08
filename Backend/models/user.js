
const db = require('../config/db');

class User{
    constructor(id,nom,prenom,email){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
    

        create(newUser, res){
            db = newUser.query(
                "INSERT INTO utilisateur",
                newUser,
                (err, res) => {
                    if (err) {
                        console.log({error});
                        result(err, null);
                        return;
                    }
                    console.log('gagné');
                    result(null, {id: res.id, ...newUser});
                })
            }}
            
            
            
        
            
         

module.exports = User
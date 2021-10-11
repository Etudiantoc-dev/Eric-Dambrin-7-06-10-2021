const mysql = require("mysql");

// Create connection


    const db = mysql.createConnection ({
    
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'Groupomania',
    socketPath : "/Applications/MAMP/tmp/mysql/mysql.sock",
   
    })
    
    
db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }})
  //   db.query("SELECT * FROM utilisateur", function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     });
   
    console.log('connecté à mysql' ); 
  // });
  

    
module.exports = db


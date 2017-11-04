const express = require('express');

const { passport } = require('../auth');
const { getDb } = require('../database/bootstrap.database'); // <-- Not correct

const AuthRouter = express.Router();

AuthRouter.post('/register', (req, res) => {
  // create new user, add to database
  const db = getDb();

  if (!db) {
      return res
          .status(500); 
  }

  const { username, password } = req.body;

  db.users
      .findOne({ user_name:username })
      .then(user => {
          if (user) {
               res
                  .status(400)
                  .send({ message: `User with ${ username } already exists`});

                  return null;
          }

          return db.users.save({ user_name:username, password }); // Adds a new record if it doesn't exist. Updates an existing record if the id matches.  
      }) 

      .then(user => {
          if(!user) {
              return;
          }
          res.send({message: 'Successfully registered!', user });
      }) 
      .catch(err => { 
          res
              .status(500)
              .send({ message: 'Error with the database' })
      });
      

  });

AuthRouter.post('/login', passport.authenticate('local'), (req, res) => {

  // log the user in
  res.send({
      message: 'Sucessfully logged in!',
      user: req.user,
  });
});

AuthRouter.get('/logout', (req, res)=> {
    req.logOut();

    res.sendStatus(200);
})

module.exports = AuthRouter;

// module.exports = {

//   // LOGIN
//   login: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.login([username, password])
      
//       .then(user => { 

//         res.status(200).send(user); 
//       })
//       .catch( err => {
//         console.log(err);
//         res.status(500).send(err);
//       });
//   },

//   // REGISTER
//   register: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.register([id, username, password])

//       .then(user => { res.status(200).send(user); })
//       .catch( err => {
//         console.log(err);
//         res.status(500).send(err);
//       });
//   },

//   // LOGOUT
//   logout: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.logout()

//       .then(user => { res.status(200).send(user); })
//       .catch( err => {
//         console.log(err);
//         res.status(500).send(err);
//       });
//   }
// };
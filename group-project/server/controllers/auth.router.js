module.exports = {

  // LOGIN
  login: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.login([id, username, password])
      
      .then(user => { res.status(200).send(user); })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  // REGISTER
  register: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.register([id, username, password])

      .then(user => { res.status(200).send(user); })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  // LOGOUT
  logout: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.logout()

      .then(user => { res.status(200).send(user); })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
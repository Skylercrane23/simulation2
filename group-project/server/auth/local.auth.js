const LocalStrategy = require('passport-local').Strategy;  
const { getDb } = require('../database/bootstrap.database');

function configureLocal(passport) {  // Configures passport object with the strategy that we want. In this case the strategy is the username, password, and done function.
    passport.use(new LocalStrategy((username, password, done) => { // <- Called a "verify" function.
        const db = getDb();  // Gets the database. 

        if (!db) {  // If getDb fails then it sends this message.
            return done({ message: 'Unable to find user: user is not connected' });
        }

        db.users
            .findOne({  // FindOne function is a built in method.
                user_name:username
            })
            .then(user => {  // Error case where user cannot be found.
                if (!user) {
                    return done({
                        message: `Unable to find user with username ${ username }`
                    });
                }

                if (user.password != password) {  // Error case where passwords don't match.
                    return done({
                        message: 'Unable to authenticate user: passwords do not match'
                    });
                }

                done(null, user); // Success case of username and password matching. Null is saying "there is no error".
            })

            .catch(err => {  // Sends an error if the query didn't work.
                done(err);
            });
    }));

    return passport;
}

module.exports = configureLocal;
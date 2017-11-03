const passport = require('passport');

const configureLocal = require('./local.auth');
const { getDb } = require('../database/bootstrap.database');

configureLocal(passport);

passport.serializeUser((user, done) => {
    if (!user) {
        return done({ message: 'no user!' });
    }

    done(null, user.user_id)
})

passport.deserializeUser((id, done) => {
    const db = getDb();

    if (!db) {
        return done({ message: 'not connected to db' });
    }

    db.users
        .findOne({ user_id:id })
        .then(user => done(null, user))
        .catch(err => done(err));
})

module.exports = {
    passport,
};
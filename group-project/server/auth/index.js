module.exports = {
    ...require('./bootstrap.auth'), // <-- Three dots just takes whatever members come from ./bootstrap.auth.
};

    // This is what it's grabbing from the bootstrap.auth file above.

    // module.exports = {
    //     passport,
    // };
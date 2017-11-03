const { dbPassword, dbUsername, dbName, dbProtocol, dbHostName, dbPort } = require('../config/keys.config');

const connectionString = `${dbProtocol}://${dbUsername}:${dbPassword}@${dbHostName}:${dbPort}/${ dbName }?ssl=true`;

module.exports = {
    connectionString,
    dbPassword,
    dbUsername,
    dbName,
    dbProtocol,
    dbHostName,
    dbPort
};


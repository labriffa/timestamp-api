var timestamp = require('unix-timestamp');

// convert unix -> natural
module.exports.unixToNatural = (unix) => timestamp.toDate(unix);

// convert natural -> unix
module.exports.naturalToUnix = (natural) => timestamp.fromDate(natural);
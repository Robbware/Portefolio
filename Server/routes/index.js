const footer = require('./footer');

module.exports = function(app, db) {
    footer(app, db);
    // Other route groups could go here, in the future
};
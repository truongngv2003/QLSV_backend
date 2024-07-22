const studentsRouter = require('./students');

const route = (app) => {
    app.use('/', studentsRouter);
}

module.exports = route;
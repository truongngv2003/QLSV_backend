const studentsRouter = require('./students');

const route = (app) => {
    app.use('/students', studentsRouter);
}

module.exports = route;
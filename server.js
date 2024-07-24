const express = require('express');
const app = express();

const cors = require('cors');
const route = require('./routes/index');
const db = require('./config/db')

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.connectDB();

route(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

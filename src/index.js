const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
    origin: "http://118.67.133.207:3000"
};

app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/test')(app);
require('./routes/habit')(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
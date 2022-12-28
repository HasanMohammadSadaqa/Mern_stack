const express = require('express');
const cors = require('cors');
const app = express();
// require('./server/config/mongoose.config'); // This is new
require("./config/mongoose.config");
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/user.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
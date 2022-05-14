const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const user = require("./routes/user_game");
const biodata = require("./routes/user_game_biodata");
const history = require("./routes/user_game-history");

//const swaggerJSON = require('./swagger.json');
const swaggerUI =require('swagger-ui-express')

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user_game',user);
app.use('/biodata',biodata);
app.use('/history',history);
app.use('/docs',swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))
const port = process.env.PORT || 3020;



app.get("/",(req, res)=>{
    res.json({message:" wolcome"});
});

app.listen(port,()=> console.log(`server running on port ${port}`))
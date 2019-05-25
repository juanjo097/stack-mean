const express = require('express');
const cors = require('cors');
const app = express();
const PORT_D = 3000;
const routes = require('../routes/index');
const task = require('../routes/task');
const URL_PREFIX = '/api';

// server settings

app.set('port', process.env.PORT || PORT_D);
// default port
let port_assigned = app.get('port');

app.engine('html',require('ejs').renderFile);

app.set('view engine','ejs');

//middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes

//app.use(routes);
//app.use(task);

app.listen(port_assigned, ()=>
	   {
	       console.log('Server on port: ', port_assigned);
	   });

  const { response } = require('express');
const express = require('express');
const { request } = require('http');
const morgan = require('morgan');
const CORS = require('cors')
const path = require('path');
const apiRoutes  = require('./routes/rutas');


// Db connection
const { mongoose } = require('./mongo');


const app = express();
app.use(CORS());
// Middlewares
app.use(morgan('dev'));
app.use(express.json());   // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname , 'public')));


// Settings 
app.set('port', process.env.PORT || 5005);

app.get('/', (request, response)=>{
  response.send('<h1>Servidor Back-End</h1>')
})


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
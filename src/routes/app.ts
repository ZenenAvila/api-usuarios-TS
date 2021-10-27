import express from 'express';
const app=express();
const router = express.Router();

import cors from 'cors';
import morgan from 'morgan';

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


const port = process.env.PORT||5000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); // If needed to add
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Origin,Accept,Authorization,x-access-token'); // If needed	
	res.setHeader('Access-Control-Allow-Credentials', "true"); // If needed
	next();
  });

  app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});

app.listen(port,()=>{
	console.log(`API corriendo en el puerto ${port} (env:${process.env.NODE_ENV})`);
});


export{app,router};
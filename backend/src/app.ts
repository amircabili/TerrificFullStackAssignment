 import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes';  

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mount the route
app.use('/todos', todoRoutes); 

export default app;

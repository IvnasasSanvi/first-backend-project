import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes.js';
// import productRoutes from './routes/productRoutes.js';  
const {createTodo} = require('./types.js');
const app = express();

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsePayload  = createTodo.safeParse(createPayload);
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {

})
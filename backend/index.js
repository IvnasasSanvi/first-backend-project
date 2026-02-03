import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes.js';
// import productRoutes from './routes/productRoutes.js';  
const {createTodo, updateTodo} = require('./types.js');
const {todo} = require('./db.js');
const app = express();

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsePayload  = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })

    res.json({
        msg: "Todo created successfully",
    })
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        return res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
})
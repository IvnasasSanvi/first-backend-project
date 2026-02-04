import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes.js';
// import productRoutes from './routes/productRoutes.js';  
const {createTodo, updateTodo} = require('./types.js');
const {todo} = require('./db.js');
const app = express();

app.use(express.json());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload  = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo created successfully",
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.json({
        todos,
    });
})

app.put('/completed', async(req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    })

    res.json({
        msg: "Todo marked as completed",
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
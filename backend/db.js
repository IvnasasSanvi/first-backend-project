import mongoose from "mongoose";
// mongodb://localhost:27017/todos
mongoose.connect("mongodb+srv://mongodb://localhost:27017/todos")
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

export default todo;
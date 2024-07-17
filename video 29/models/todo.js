import mongoose from "mongoose"

const Todoschema = new mongoose.Schema({
    title: string,
    desc: string,
    isDone: Boolean
})
export const Todo = mongoose.model('Todo', Todoschema)
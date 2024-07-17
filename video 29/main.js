import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/todo.js"
await mongoose.connect("mongodb://localhost:27017/")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: "Jeethu", desc: "He is a good boy", isDone: false})
    todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
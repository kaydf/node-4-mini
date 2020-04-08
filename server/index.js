require("dotenv").config()
const express = require("express")
const session = require('express-session')
let {SERVER_PORT, SESSION_SECRET} = process.env
const app = express()
const {getAllMessages, createMessage, history} = require("./messagesController")


//top level middleware
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))


app.use(express.json())

//endpoints
app.get("/api/messages", getAllMessages)
app.post("/api/messages", createMessage)
app.get("/api/messages/history", history)

app.listen(SERVER_PORT, () => 
console.log(`server has ears!!! port ${SERVER_PORT}`))
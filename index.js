// Start your es6 scripts here
//const express = require("express")
import express from "express"
import resolvers from "./graphql/resolvers.js"
import schema from "./graphql/schema.js"
import { graphqlHTTP } from "express-graphql"
import "./db.js"

const app = express()

app.get("/",(req, res) => {
    res.send("Graphql demo app").status(200)
})

// const root = {lco: () => {console.log('learn cde online')}}

const root = resolvers;

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000,() => {
    console.log("Graphql server is running!!!")
})





// https://drive.google.com/file/d/1v4Yvt3j5uZxWwxwM2uiY7NKiyHLZsfbV/view?usp=share_link


// https://succ essive.zoom.us/rec/share/glMrY_6fWEiX0WxZJy1EjGJF3n0rm6mEEz90R4uzcOQfSv0at4mEWFQzYf9Lt1r7.I3za9pA8o_fJItGe

// Passcode: 4!neb.Yc


// Albin
// https://stride-edge.dev.k12.com/us/en/stride-tutoring.html
// Strid@123456
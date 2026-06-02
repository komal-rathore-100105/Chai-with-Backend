require('dotenv').config()
const express = require('express')
//import express from 'express'
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Welcome to Twitter!')
})
app.get('/facebook',(req,res)=>{
    res.send('Welcome to Facebook!')
})
app.get('/login', (req, res) => {
        res.send('Login Page')
        
    })
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

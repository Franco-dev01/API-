const express=require('express');
const app=express();
const api=require('./api.js');

app.get('/api/v2/doc',(req,res)=>{
  res.send(JSON.stringify(api))
})



app.listen(8080)

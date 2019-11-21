const express=require("express")
const app=express()
const api=require("./api");

app.get('/topChef/voiture',(req,res)=>{


    res.json(api);
})

app.listen(8000,()=>{
    console.log('votre server est demarrer sur le port 8000')
});
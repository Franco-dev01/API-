const express=require('express');
const app=express();
const axios =require('axios');
app.set('views','./view');
app.set('view engine','ejs')

app.get('/',async(req,res)=>{
  const api=await axios.get('http://localhost:8080/api/v2/doc').then(res=>res.data);
  console.log(api.docs);
  res.render('index',{donne:api.docs});
})

app.get('/vb/fr',(req,res)=>{

  res.render('page2')
})

app.listen(8087);

//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/check",(req,res)=>{
    var password = req.body.password;
    if(password == "ILoveProgramming"){
     res.sendFile(__dirname+"/public/secret.html");
    }else
    {
        res.sendFile(__dirname+"/public/index.html");
    }
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}` );
})

//ANOTHER WAY OF IMPLEMENTATION

/*var userIsAuthorised = false;
  function passwordCheck(req,res,next)
  {
    password  = req.body["password"];
    if(password === "ILoveProgramming")
    {
        userIsAuthorised = true;
    }
    next();
  }

  app.use(passwordCheck);

  inside post req
  if(userIsAuthorised)
  {
    res.sendfile(secret);
  }else{
    res.sendfile(index); or res.redirect("/"); here mention only path
  }  
  
  */
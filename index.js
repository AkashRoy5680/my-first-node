const express = require("express");
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users=[
  {id:1,name:"jogesh",address:"africa"},
  {id:2,name:"mogesh",address:"uganda"},
  {id:3,name:"higurt",address:"ethopia"},
  {id:4,name:"himesh",address:"africa"},
  {id:5,name:"biogesh",address:"jamaica"},
]

app.get("/", (req, res) => {
  res.send("Hello World! Send NUDES immediately restart" );
});

app.get("/users", (req,res)=>{
  console.log("query",req.query)
  if(req.query.name){
    const search=req.query.name.toLowerCase();
    const matched=users.filter(user=>user.name.toLowerCase().includes(search))
    console.log(matched)
    res.send(matched)
  }
  else{
    res.send(users);
  }
  
})

app.get("/user/:id",(req,res)=>{
  console.log(req.params);
  const id=parseInt(req.params.id);
  const user=users.find(u=>u.id===id);
  res.send(user);
})

app.post("/user",(req,res)=>{
  console.log(req.body)
  const user=req.body;
  user.id=users.length+1;
  users.push(user);
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from 'express';



const app =express();

app.use(express.json());
app.use(express.static(__dirname + '/src/public'));



app.listen(3000,(res,req) => {
  console.log("Sever online at port 3000");
})

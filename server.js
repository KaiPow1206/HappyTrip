import express from 'express';



const app =express();

app.use(express.json());


app.listen(3000,(res,req) => {
  console.log("Sever online at port 3000");
})

const express = require("express");
const app  = express();

const index = require("build/index")

const port = process.env.PORT || 8080;

// app.use(express.static('public'))
// console.log('shit', __dirname)
// app.get(/^(?!\/api(\/|$))/, (req, res) => {
//     // console.log('this is dirname', __dirname)
//     const index = path.resolve(__dirname, './build', 'index.html');
    
//     res.sendFile(index);
//   });

 
  app.use(express.static('public'))
  
 

app.listen(port,  () => {
    console.log("Server's starting!!");
}) 
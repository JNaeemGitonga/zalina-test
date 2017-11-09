const express = require("express");
const app  = express();

const port = process.env.PORT || 8080;

app.use(express.static('public'))
console.log('shit')
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    console.log('this is dirname', __dirname)
    const index = path.resolve(__dirname, './build', 'index.html');
    
    res.sendFile(index);
  });
 
app.listen(port,  () => {
    console.log("Server's starting!!");
}) 
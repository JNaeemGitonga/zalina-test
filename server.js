const express = require("express");
const app  = express();

const port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../build', 'index.html');
    res.sendFile(index);
  });

app.listen(port,  () => {
    console.log("Server's starting!!");
})
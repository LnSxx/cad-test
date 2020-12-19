const compute = require("./triangulation.js");
var express = require('express');
var cors = require('cors');
const PORT = 3002
var app = express();
const jsonParser = express.json();
app.use(cors())
app.use(jsonParser);


app.post('/', function (req, res) {
    let newBox = new compute.Box(req.body.length, req.body.width, req.body.height);
    let boxData = newBox.getTriangles()
    res.json({ boxData })
    console.log(boxData)
});

app.listen(PORT, () => {
    console.log('Server has been started...')
})

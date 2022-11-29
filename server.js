var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');

app.use(express.json())
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next()
})

app.get('/', async(req, res)=>{
    try {
        const { data } = await axios("https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ-BpMDgK3ABlAznfqulUy_Yrf9ZyNP7ckcePwlRobhPS9G10ofxe4GfWrmMiGU2tLpswLBTMexQz7/pub?output=csv")
        console.log(data)

        return res.json(data)
    } catch (error) {
        console.error(error)   
    }

})



app.listen(5600);

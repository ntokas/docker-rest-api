const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get("/:id", function (req, res) {
let donutID = req.params.id;
fs.readFile('./donut.json', "utf-8", (error, data) => {
        console.log(data);
        if (error) throw error;
        obj = JSON.parse(data);
for  (i = 0; i < obj.length; i++)
 { 
    if(obj[i].id==donutID)
    {
        res.json(obj[i]);
    }
}
});
});

router.get("/", function (req, res) {
    fs.readFile('./donut.json', "utf-8", (error, data) => {
        console.log(data);
        if (error) throw error;
        obj = JSON.parse(data);
         res.json(obj);
    });
});


module.exports = router;

const bodyParser = require("body-parser")
const express = require("express")

 
const app = express()
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    let today = new Date();
    console.log(today.getHours())
    if( today.getDay() === 6 ||today.getDay() === 0 ){
        res.send(" Yeah it's the weenkend")
    } else {
        res.send(" Boo! I have to work!")
    }

})
 
 
app.listen(3000, () =>{
   console.log("Server is running")
});

const bodyParser = require("body-parser")
const express = require("express")

 
const app = express();
let items = ["Buy food", "Cook food", "Eat food"] 
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    let today = new Date();
    // console.log(today.getHours())
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-us", options)
    res.render('list', {kindOfDay: day, newListItems: items });
})

app.post("/", (req, res) =>{
    item = req.body.newItem;
    
    items.push(item)
    console.log(item)

    res.redirect("/")

})
 
 
app.listen(3000, () =>{
   console.log("Server is running")
});

const bodyParser = require("body-parser")
const express = require("express")
const date = require(__dirname+"/date.js")

// console.log(date())
// console.log(__dirname+"/date.js")

const app = express();

let items = ["Buy food", "Cook food", "Eat food"] 
let workItems = []

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    let day = date.getDate();
    res.render('list', {listTitle: day, newListItems: items });
});

app.post("/", (req, res) =>{
    console.log(req.body)
    item = req.body.newItem;
    if(req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work")
    }else {
        items.push(item)
        res.redirect("/")
    }
    
    
});

app.get("/work", (req, res) =>{
    res.render("list", {listTitle: "work List", newListItems: workItems})
    
})
 
app.post("/work", (req, res) =>{
    let item = req.body.newItem;
    console.log(item)
    workItems.push(item);
    res.redirect("/work")
});

app.get("/about", (req, res) =>{
    res.render("about")
})
 
app.listen(3000, () =>{
   console.log("Server is running")
});

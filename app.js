const bodyParser = require("body-parser")
const express = require("express")

 
const app = express()
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    let today = new Date();
    // console.log(today.getHours())
    let currentDay = today.getDay()
    let day = "";
    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
    
        default:
            console.log("Error: the day is" + currentDay )
    }
    res.render('list', {kindOfDay: day});
})
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index', {foo: 'FOO'});
// });
 
 
app.listen(3000, () =>{
   console.log("Server is running")
});


exports.getDate = function () {
let today = new Date();
// console.log(today.getHours())
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

return today.toLocaleDateString("en-us", options)
};

module.exports.getDay = function () {
    let today = new Date();
    
    let options = {
        weekday: "long",
    }
    
    return today.toLocaleDateString("en-us", options)
    }
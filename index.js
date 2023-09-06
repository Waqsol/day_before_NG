var now=new Date();
var new_year=new Date(2024, 0, 1, 0, 0, 0, 0);
console.log(Math.ceil((new_year-now)/(1000*60*60*24)));
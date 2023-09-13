 export function newD(now){
 var new_year=new Date(2024, 0, 1, 0, 0, 0, 0);
 return Math.ceil((new_year-now)/(1000*60*60*24));}
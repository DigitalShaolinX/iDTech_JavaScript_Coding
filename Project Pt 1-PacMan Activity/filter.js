let years = [1996, 2000, 1998, 2006, 1989, 2013];



let genZ = years.filter(yr => {
 if(yr >= 1997 && yr <= 2015){
    return true;

 }
return false;
});
console.log(years);
console.log(genZ);

let yearDoubles = years.map(yr => yr*2);
console.log(yearDoubles);
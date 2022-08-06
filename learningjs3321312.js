const car1 = {
    name: "Ford Mustang",
    color: "blue",
    price: 27205
}

const car2 = {
    name: "Shiny",
    color: "silver",
    price: 32306
}

const car3 = {
    name: "The car",
    color: "red",
    price: 11105
}

console.log(car1.name, car2.color, car3.price);
car3.name = "Honda Civic";
console.log(car3.name);
car1.isNew = true;
console.log(car1.isNew);
delete(car1.price);
let carCollection = [car1, car2, car3]
carCollection.push({
    name: "qwertyuiopasdfghjklzxcvbm",
    color: "purple",
    price: 1000000000000000

});
console.log(carCollection);
console.log("my 1st cars name is " + carCollection[0].name);
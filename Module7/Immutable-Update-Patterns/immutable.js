// let fruit = "apple"

// let fruitCopy = fruit 

// console.log("fruit:", fruit)

// fruit = "grapes"
// console.log("fruit:", fruit)
// console.log("fruitCopy:", fruitCopy)

let car = { 
    year: "2015", 
    model: "Rav4", 
    make: "Toyota", 
    color: "grey", 
    materials: ['metal', 'plastic']
}

console.log("car: ", car)
// let car2 = car

// let car2 = {...car}
let car2 = {...car, materials: [...car.materials], year: "2021", model: "Taco"}
// console.log("car2: ", car2)
// console.log("----CHANGE----")
// car.color = "blue"

// console.log("car2: ", car2)

car.materials.push("leather")

console.log("car2:", car2)
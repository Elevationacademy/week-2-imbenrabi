//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")//wiil be printed 8 times
    }
    console.log("Finished running " + distance + " miles")//will print 8 in the distance variable
}


console.log("Damn, you see this gal? She ran " + distance + " miles") 
// distance in row 15 is not defined! it belongs to the if statement local scope.

//===================================================================================
//Section 2
//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound) //an error will be thrown here so nothing will be printed
}
//cowSound is not defined! it belongs to the if statement local scope/code-block

//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder) // will print a member of allOrders with "special " prior to it"
    }

    console.log("Finished serving all the orders: " + orders) 
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)
// orders in line 39 will be allOrders array, no error will be thrown.

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed" //seed does not get returned from the function
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot) //seed is not defined, an error will be thrown in this line
}

plant()
//nothing will be printed, seed is not defined in plant's scope or in the global scope but in getSeed's

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true //found is initialized in this line - will always be 'true'
        }
    }
    return found //found is not defined, an error will be thrown here
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}
//found in line 72 is not defined, found in line 69 belongs to the if statement scope, nothing will be printed but the error

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true // the code will never reach this line since i is initialized as 0
        }
    }
}

makeEnough()
if (isEnough) { // isEnough will always be false
    console.log("Finally, sheesh")//the code will never reach this line
}
else {
    console.log("Here we go again...")
}
//this code will always print "Here we go again..."
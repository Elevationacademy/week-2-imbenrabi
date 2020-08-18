// Ex 01
const push = function () {
    console.log("pushing it!")
}
  
const pull = function () {
    console.log("pulling it!")
}

const pushPull = func => func(); 
  
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//Ex 02
const returnTime = function (time) {
    alert('The current time is: ' + time)
}

const getTime = (func) => {
    const time = new Date();

    returnTime(time);
}
  
getTime(returnTime)

//Ex 03
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const alertt = (data) => {
    alert(data);
}

const logData = (data) => {
    console.log(data);
}

displayData(alertt, logData, "I like to party")

//Ex 04
const sumOfThree = (num1, num2, num3) => num1 + num2 + num3;

//Ex 05
const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
console.log(capitalize('iAmBenHaShamen')); 

//Ex 06
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}`; 

console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"

//Ex 07
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    setTimeout(soundFunc(sound), 2000); 
    
}
      
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
const makeSound = sound => alert(sound)
      
explode(shineLight, makeSound, "BOOM")



// 1 liter = 0.264172052 US gallons
// 1 foot = 0.3048 meters
// 1 kilogram = 2.20462262 pounds

let meterORfeet = 0.3048
let litORgall = 0.2641
let kilORPoun = 2.2046

let mainNum = document.getElementsByClassName("start")

function calc(value) {
    for(let num of mainNum){
        num.textContent = value
    } // we use for to show every element has class "start"
    
    document.getElementById("mTof").textContent = (value/meterORfeet).toFixed(3) 
    document.getElementById("fTom").textContent = (value*meterORfeet).toFixed(3)
    document.getElementById("lTog").textContent = (value*litORgall).toFixed(3)
    document.getElementById("gTol").textContent = (value/litORgall).toFixed(3)
    document.getElementById("kTop").textContent = (value*kilORPoun).toFixed(3)
    document.getElementById("pTok").textContent = (value/kilORPoun).toFixed(3)
    // toFixed use to round a number 
}
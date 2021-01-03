var rect = require("./rectangle")

function solveRect(length, breadth){
    console.log("The length is "+length+ " and breath is "+breadth)

    if(length<=0 || breadth<=0){
        console.log("Length or breadth has to be greater than zero")
    }else{
        console.log("Perimeter is "+rect.perimeter(length, breadth)+" Area is "+rect.area(length, breadth))
    }
}

solveRect(4,5)
solveRect(-5,6)
solveRect(6,8)
solveRect(0,9)
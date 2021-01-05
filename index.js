var rect = require("./rectangle")

function solveRect(l, b){
    console.log("The length is "+l+ " and breath is "+b);

    rect(l, b, (err, rectangle) => {
        if(err){
            console.log("ERROR: "+ err.message)
        }else{
            console.log("Area is "+rectangle.area())
            console.log("Perimeter is "+rectangle.perimeter())
        }
    });

    console.log("**********AFTER SOLVERECT FUNTION***********")
}

solveRect(4,5)
solveRect(-5,6)
solveRect(6,8)
solveRect(0,9)
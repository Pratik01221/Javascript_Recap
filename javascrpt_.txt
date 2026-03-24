// let , var , const 
// declaration and initilization


// var a = 12 ;
// var a = 50;   
//  window me add karta hai 
// function scoped hota hai 
// redeclare kar shakte hai but error nahi aayega 

function abc(){
    if(true) {
        var a =22;
    }else{
        console.log(a)// The a is not accesible in the else beaucause of the limited 
                      // scope with the var>>
    }
}
 
// let a = 12 ;
// let a = 50;   //  In the let the redeclaration is not allowed


const b = 123;  // In the const value is not change 
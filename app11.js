// FUNCTION AND EXPRESSION

//Function
1. function shiva(){
        console.log("hlo this is coding ")
   OR
           return ("hloi manurai")

      return 2025;
  }

  console.log(shiva())
   shiva()
2.function shiva(names){
       return `hello ${names}`
   }
   console.log(shiva("santhosha"))

3.function shiva(names="prakash"){
     return `hello ${names}`
 }
 console.log(shiva())

// FUNCTION EXPRESSION
  const name=function(a,b,c){
        console.log("shiva");
      return a*b*c
  }
  console.log(name(4,8,6))


  // IIFE form(immidiate invokable function Expression)
 (function(name){
      console.log("IIFE--ran")
     console.log(`${name}--ran`)
 })("santhu")

const shiva={
     getBirthday:function(day){
         return `jan ${day}`
     },
 };
 console.log(shiva.getBirthday(4)) 

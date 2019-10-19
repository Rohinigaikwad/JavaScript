console.log("Hello world");
// 3 ways for declaring the variable.

var myName = "rohini";
let ourName= "FreeCodeCamp";
const pi = 3.14;
console.log(myName + " " +ourName+ " " + pi);

var a; //only declaration
var b= 3; //declaration with assignment
console.log(a);
 a=7;
 b=a;
 console.log(b);
 
 //Global Vs Local Variables - u can create local and global variables with the same name
 var outWear = "T-shirt"; //global variable
 function myOutfit(){
     var outWear ="sweter"; //local variable -takes precedence over global variable so the o/p is sweter.
     return outWear ;
 }
 console.log(myOutfit()); //returns local
 console.log(outWear); //returns global
 
 //Return a value from a function with return
 
 function minusSeven(num){
     return num-7;
 }
 console.log(minusSeven(10));
 
 function multi(num){
     return num*7;
 }
 console.log(multi(10));
 
 //Understanding undefined value return from a function
 var sum =0;
 function addThree(){
     sum = sum +3;
     //return sum;   if not return anything it shows null or undefined
 }
 console.log(addThree());
 
 //Assignment with a returned value
 var changed=0;
 function change(num){
     return (num+5)/3;
 }
 changed= change(10);
 console.log(changed);
 
 //Stand in-Line -just like queue data structure
   //JSON.stringify-is just a way to change an array into a string taht can easily be printed to the screenfun
   function nextInLine(arr,item){
       arr.push(item);  //arr is testArr and item is 6
       //return item;
       return arr.shift(); //shift removes 1st item 1 and returns 1st item 
   }
    var testArr = [1,2,3,4,5];
    console.log("Before" + JSON.stringify(testArr));
    console.log(nextInLine(testArr,6));  //this fun returns first item 
    console.log("After" + JSON.stringify(testArr));
    
    //Boolean Values -data types in JS - true,false
    function booleans(){
        return true;
    }
    console.log(booleans());
    
    //USe conditional logic with IF statements
    function trueOrFalse(isItTrue){
        if(isItTrue){
            return "Yes,its true";
        }
         return "No,its  not true";
    }
    console.log(trueOrFalse(false));
    
  
    function ourTrueOrFalse(num1,num2){
        if(num1>num2){
            return "Yes,its true";
        }
         return "No,its  not true";
    }
    console.log(ourTrueOrFalse(10,7));
    
    //comparision with the equality operator -it makes type corretion 2 == "2" true -string converted to number
    function testEqual(val){
        if(val == 12){
            return "equal";
        }
        return "not equal";
    } 
       console.log(testEqual(10));
        
//comparision with the strict equality operator - check values and type -3 === "3" -false
function strictEqual(val){
        if(val === 12){
            return "equal";
        }
        return "not equal";
    } 
       console.log(strictEqual(12));
       
//Practice comaparing different values
function compareEquality(a,b){
    if(a == b){
        return "equal";
    }
    return "not equal";
}
console.log(compareEquality(10,"10"));

function strictCompareEquality(a,b){
    if(a === b){
        return "equal";
    }
    return "not equal";
}
console.log(strictCompareEquality(10,"10"));


//comparision with the Inequality operator
function testNotEqual(val){
    if(val != 99){
        return "not equal";
    }
     return " equal";
}
console.log(testNotEqual(99));

//comparision with the strict Inequality operator
function testStrictNotEqual(val){
    if(val !== 99){
        return "not equal";
    }
     return " equal";
}
console.log(testStrictNotEqual(10));
//console.log(testStrictNotEqual("99"));

//Comparisons with Greater Than Operator
function testGreaterThan(val){
    if(val > 100){
        return "over 100";
    }
    if(val > 10){
        return "over 10";
    }
    return "10 or under";
}
console.log( testGreaterThan(101));

//Comparisons with the greater than or Equal To Operator
function testGreaterThanOrEqualTo(val){
    if(val >= 100){
        return "100 or over ";
    }
    if(val >= 10){
        return "10 or over ";
    }
    return "10 or under";
}
console.log( testGreaterThanOrEqualTo(10));


//Comparisons with the Less Than Operator
function lessThan(val){
    if(val < 20){
        return "under 20"
    }
    if(val < 50){
        return "under 50"
    }
    return "50 or over"
}
console.log(lessThan(51));

//Comparisons with the less than or Equal To Operator
function lessThanOrEqual(val){
    if(val <= 20){
        return "20 or under 20"
    }
    if(val <= 50){
        return "50 or under 50"
    }
    return "50 or over"
}
console.log(lessThanOrEqual(51));

//Comparisons with the Logical And operator
function testLogicalAnd(val){
    if(val <= 50 && val >=25){
        return "yes";
    }
    return "No";
}
console.log(testLogicalAnd(34));

//Comparisons with the Logical OR operator
function testLogicalOr(val){
    if(val >= 50 || val <=25){
        return "yes";
    }
    return "No";
}
console.log(testLogicalOr(10));

//Else Statements
function testElse(val){
    var result = "";

    if(val > 5){
        result = "Bigger than 5";
    } else {
        result = "less than 5";
    }
    return result;
}
console.log(testElse(1));

//ElseIf Statements
function elseIf(val){
    if(val > 10){
        return "Greater than 10";
    }else if(val < 5 ){
        return "smaller than 5";
    } else {
        return "Between 10 and 5";
    }
}
 console.log(elseIf(6));

 //Logical order in If Else Statements
 function orderMyLogic(val){
     if(val < 5){    //order is imp here u shoud write <5 first and < 10 later otherwise it will always show <10 ans for any value <10 but we want <5 also
         return "less than 5";
     }else if(val < 10){
        return "less than 10";
    } else {
        return "greater than or equal to 10";
    }
 }
 console.log(orderMyLogic(11));

 //Chaining If Else Statements
 function testSize(num){
     if(num < 5){
         return "tiny";
     }else if(num < 10){
         return "small";
     }else if(num < 15){
         return "medium";
     }else if(num < 20){
         return "large";
     }else {
         return "huge";
     }
  }
  console.log(testSize(13));

  //Golf Code
  var names = ["Hole-in-one","Eagle","Birdie","Par","Double Bogey","Parrot","Go Home"];
  function golfScore(par, strokes){
      if(strokes == 1){
          return names[0];
      }else if(strokes <= par-2){
          return names[1];
      }else if(strokes == par-1){
        return names[2];
      }else if(strokes == par){
        return names[3];
      }else if(strokes == par+1){
        return names[4];
      }else if(strokes == par+2){
        return names[5];
      }else if(strokes >= par+3){
        return names[6];
      }else{
          return "change me";
      }
  }
  console.log(golfScore(5,9));

  //Switch Statements
  function caseInSwitch(val){
      var answer = "";
      switch(val){
          case 1:
              answer = "alpha";
              break;
           case 2:
               answer = "beta"; 
               break;  
            case 3:
                answer = "gamma";  
                br
                eak; 
            case 4:
                 answer = "delta";  
                 break;      
      }
      return answer;
  }
  console.log(caseInSwitch(4));
  
  //Default Option in switch Statements
  function caseInDefaultSwitch(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "alpha";
            break;
         case "b":
             answer = "beta"; 
             break;  
          case "c":
              answer = "gamma";  
              break; 
          case "d":
               answer = "delta";  
               break; 
           default:
               answer = "Stuff";
               break;         
    }
    return answer;
}
console.log(caseInDefaultSwitch("a"));

//multiple Identical options in switch Statements
function sequentialSizes(val){
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
           answer = "low";
           break;   
        case 4:
        case 5:
        case 6:
           answer = "mid";
           break;   
        case 7:
        case 8:
        case 9:
           answer = "high";
           break;           
    }
    return answer;
} 
  console.log(sequentialSizes(5));

  //Repalcing If Else chains with Switch statements
  function chainToSwitch(val){
      var answer = "";

      if(val == "bob"){
         answer = "Marley";
      }else if(val == 43){
          answer = "The answer";
      }else if(val == 1){
          answer = "The answer is 1";
      }else if(val == 99 ){
          answer = "The answer is 99";
      }else if(val==7){
          answer = "answer is 7";
      }
      return answer;
  }
  chainToSwitch("bob");

  //This wiil chain into switch like this
  function chainToSwitch(val){
      var answer = "";
      
      switch(val) {
       case "bob":
         answer = "Marley";
         break;
       case 43:
          answer = "The answer";
          break;
       case 1 :
          answer = "The answer is 1";
          break;
       case 99:
          answer = "The answer is 99";
          break;
       case 7 :
          answer = "answer is 7";
          break;
      }
       return answer;
  }
    console.log(chainToSwitch(43));

    //Returning boolean values from functions
    function isLess(a,b){
       return a<b;
    }
    console.log(isLess(20,15));

    //Returning early pattern from functions
    function abTest(a,b){
        if(a < 0 || b<0){
            return undefined;
        }
        return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));

    }
    console.log(abTest(-2,2));

    //counting cards
    var count = 0;
    function cc(card){
        switch(card){
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                break;
            case 10:
            case "J":
            case "K":
            case "Q":
            case "A": 
            count--;
            break;
        }
        var holdbet = "Hold";    
        if(count>0){
            holdbet = "bet";
        }
        return count + " " + "holdbet";
    }
    cc(8);cc("K");cc(7);cc("A");
    console.log(cc(5));

    //Build JavaScript Objects
    var ourDog = {              //object1
       "name":"camber",
       "legs":4,             
       "tails":1,
       "friends":["everything!"]
   };

   var myDog = {
       "name":"Doggy",
       "legs":4,
       "tails":1,
       "friends":["everything!"]
   }

//Accessing Object Properties with dot notation
var testObj ={
    "hat":"ballcap",
    "shirt":"jersy",
    "shoes":"cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var shoesValue = testObj.shoes;

console.log(hatValue + " " + shirtValue +" "+ shoesValue);

//Accessing Object Properties with bracket notation
var testObj ={
    "an entree":"hamburger",
    "my side":"veggies",
    "the drink":"water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
var sideValue = testObj["my side"];

console.log(entreeValue + " " + drinkValue +" "+ sideValue);

//Accessing object properties with variables
var testObj = {
    12:"Rohini",
    15:"Bharat",
    16:"Lohakare"
};

var personName = 16;
var person = testObj[personName];

console.log(person);

//Updating Object properties
var ourDog = {              //object1
       "name":"camber",
       "legs":4,             
       "tails":1,
       "friends":["everything!"]
   };

   ourDog.name = "Happy camber";
   ourDog.legs = "6";
   console.log(ourDog.name + " "+ ourDog.legs);

//Add new properties to an object

var ourDog = {              //object1
       "name":"camber",
       "legs":4,             
       "tails":1,
       "friends":["everything!"]
   };
ourDog.bark = "bow-wow";

console.log(ourDog.bark);

var myDog = {
       "name":"Doggy",
       "legs":4,
       "tails":1,
       "friends":["everything!"]
   }
 myDog['bark'] = "woof!";
 
 //Delete properties from an object
 var ourDog = {              //object1
       "name":"camber",
       "legs":4,             
       "tails":1,
       "friends":["everything!"],
       "bark": "bow-wow"
   };
     delete ourDog.bark;
     console.log(ourDog.bark);

     //Using objects for lookup
     function phoneticLookup(val){
         var result = "";

         switch(val){
             case "alpha":
                 result= "Admas";
                 break;
             case "bravo":
                 result= "Boston";
                 break;
             case "charlie":
                 result= "chicago";
                 break;   
              case "delta":
                 result= "Denver";
                 break;
              case "echo":
                 result= "easy";
                 break;
               case "foxtract":
                 result= "frank";
                 break;
         }
         return result;

     }
console.log(phoneticLookup("charlie"));

//Instaed of this
function phoneticLookup(val){
 var result = "";

 var lookup = {
    "alpha":"Admas",
    "bravo":"Boston",
    "charlie":"chicago",
    "delta":"Denver",
    "echo":"easy",
    "foxtract":"frank"
 };
 result= lookup[val];
  return result;
} 

console.log(phoneticLookup("echo"));
     
//Testing objects for properties
var myObj = {
    "gift":"card",
    "fruit":"Apple",
    "Animal":"Dog"
};

function checkObj(obj){
    if(myObj.hasOwnProperty(obj)){
        return myObj[obj];
    }else{
        return "Not Found"
    }
}
console.log(checkObj("Hello"));

//Manipulating complex objects
var myMusic = [
   {   //1st object
       "artist":"Rohini",
       "title":"My Book",
       "realease_year":2000,
       "formats":[
           "CD",
           "8T",
           "LP"

       ],
       "gold":true
   },
   {  //2nd object
       "artist":"Bharat",
       "title":"Bharat",
       "realease_year":2001,
       "formats":[
           "youtube video",
        ]
   }
]; //Array of objects contains string ,number objects,array objects
   // Array of different data type objects
   //it is same as json

   //Accessing nested  objects
   var myStorage = {
       "car": {
           "inside":{
               "model":"honda city",
               "company":"honda",
               "seats":"4"
           },
           "outside":{
               "trunk":"jack"
           }
       }
        
   };
   var carContents = myStorage.car.outside["trunk"];
   console.log(carContents);

   //Accessing nested Arrays
   var myPlants = [
       {
           type:"flowers",
           list:[
               "rose",
               "tulip",
               "lotus"
           ]
       },
       {
           type:"trees",
           list:[
               "Ashoka",
               "Banyan",
               "pine"
           ]
       }
   ];
   var secondTree = myPlants[1].list[1];
   console.log(secondTree);

   //2:10 time back
   
   //Interate with while loops
       //loops allows u to run same code multiple times
      var myArray = [];
      var i = 0;

      while(i < 5){
          myArray.push(i);
          i++;
      }
      console.log(myArray);


      //Iterate with for loops
      var ourArray = [];
      for(var i=0; i<5; i++){
          ourArray.push(i);
      }
      console.log(ourArray);

      //Iterate eve and odd numbers with a for loop

       var ourArray = [];
      for(var i=0; i<10; i+=2){
          ourArray.push(i);
      }
      console.log(ourArray);
//odd
      var myArray = [];
      for(var i=1; i<10; i+=2){
          myArray.push(i);
      }
      console.log(myArray);

      //count backwards with for loop

       var ourArray = [];
      for(var i=10; i>0; i-=2){
          ourArray.push(i);
      }
      console.log(ourArray);

//odd
      var myArray = [];
      for(var i=9; i>0; i-=2){
          myArray.push(i);
      }
      console.log(myArray);

      //Iterate through an array with for loop
      var ourArray = [12,23,34,56];
      var ourTotal = 0;

      for(i=0;i<ourArray.length;i++){
          ourTotal += ourArray[i];
      }
      console.log(ourTotal);

      //nesting for loops
      function multiplyAll(arr){
          var product =1;
          for(var i=0;i<arr.length;i++){
              for(j=0;j<arr[i].length;j++){
                  product *= arr[i][j];
              }
          }
          return product;

      }
      var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
      console.log(product);

      //Iterate with do-while loops
      var myArray =[];
      var i=10;

      do{
          myArray.push(i);
          i++;
      }while(i<20);

      console.log(i,myArray);

      //profile lookup
      var contacts = [{
          "firstName": "Akira",
          "lastName":"laine",
          "number":"74747474747",
          "likes":["pizza","coding","Brownie"]
        },
        {
         "firstName": "shorlock",
          "lastName":"holms",
          "number":"7474747473",
          "likes":["buger","swimming","crownie"]

        },
        {
         "firstName": "Tom",
          "lastName":"Jerry",
          "number":"65747474747",
          "likes":["chicken","singing","reaading"]

        }
     ];
     function lookupProfile(name,prop){
         for(i=0;i<contacts.length;i++){
             if(contacts[i].firstName === name){
              return contacts[i][prop] || "No such property";
             }
         }
         return "No such contacts"; 
     }
     var data= lookupProfile("Akira","likes");
     console.log(data);
     
     //Generate random fractions
     function randomFraction(){
         return Math.random();
     }
     console.log(randomFraction());


     //Generate random whole numbers
     //var randomNumberBetween0and19 = Math.floor(Math.random() * 20); //Everytime it will show different random number
     
     function randomWholeNum() {
         return Math.floor(Math.random() * 20); //returns no. between 0 to 19
     }
     console.log(randomWholeNum() );

     //generate random whole numbers within range
     
     function ourRandomRange(ourMin,ourMax){
         return Math.floor(Math.random() * (ourMax-ourMin + 1))+ ourMin;
    }
    console.log(ourRandomRange(1,9)); //o/p shows no. between 1 and 9

    //Use the ParseInt Function- it takes a string and returns a integer.
      function convertToInteger(str){
          return parseInt(str);
      }
       //console.log(convertToInteger("56"));
       console.log(convertToInteger("String"));
      //Remember that if a string is cannot be converted to an integer it returns a NaN.


      //Use the parseInt function with a Radix
           // -The parseInt function can also be used with a radix
          // - The radix specifies the base of the number in the string such as base 2 or 7 , 8
          //- the base 2 is the binary that will be commonly used and default base is 10

          function convertToInteger(str){
            return parseInt(str,2); //passing base 2
        }
         console.log(convertToInteger("10011"));
     
   // Use the conditional ternary operator
   // Syntax - condition ? statement-if-true : statement-if-false;
     
     function checkEqual(a,b){
         if(a === b){
             return true;
         } else {
              return false;
         }
     }
     
     checkEqual(1,2);

     // u can replace with ? (ternary) operator

     function checkEqual(a,b){
        return a === b ? true : false ;

         // return a === b;   //same o/p
     }    

     console.log(checkEqual(1,2));
     
   //Use multiple conditinal Ternary Operator
   
   function checkSign(num) {
       return num > 0 ? "Positive" : num < 0 ? "Negative" : "zero";
   }
   console.log(checkSign(-19));

   // Differences between var and let keywords

      //1. var keyword allows u to declare same variable twice in the same scope
         //but let does not allow.
       // Example
       
       var catName = "Quency";        //If u change every var to let then it will show error
       var quote;

        var catName = "Beu";     // here u will simple set new value i.e catName="beu" if u use let then error goes away.
        function catTalk(){
            "use strict"; //This enables srtict mode which caches common
                         // coding mistakes and unsafe actions so lot of people "use strict" at the top of js file
                         //or just maybe in a funtion to catch coding mistake such as if u create variable 
                         // dont declare it with a var or const.
                    
           catName = "Oliver";
            quote = catName + "says Mow!";

        }
        catTalk();


//Compare Scopes of the var and let keywords
 //2.Another major diff. bet var and let keyword is that when u declare a 
  // a variable with var it is declare globally or locally if declared inside a function
  //however let is limited to the block statement or expression that it was declred

  //Example
  function checkScope(){
      "use strict";
     var i ="function scope";        
      if(true){
        i = "block scope";       
          console.log("Block scope of i is:", i);
     }
     console.log("fuction scope of i is:", i);
     return i;
  }
  checkScope();

//   // case 2
//   function checkScope(){
//     "use strict";
//     let i ="function scope";       
//     if(true){
//       let  i = "block scope";          
//         console.log("Block scope of i is:", i);
//    }
//    console.log("fuction scope of i is:", i);
//    return i;
// }
//  checkScope();

//  // case 3
//  function checkScope(){
//     "use strict";
//     //let i ="function scope";       
//     if(true){
//       var  i = "block scope";          
//         console.log("Block scope of i is:", i);
//    }
//    console.log("fuction scope of i is:", i); //outside var i is accessed
//    return i;
// }
//  checkScope();
 
//  // case 4
//  function checkScope(){
//     "use strict";
//     //let i ="function scope";       
//     if(true){
//       let i = "block scope";          
//         console.log("Block scope of i is:", i);
//    }
//    console.log("fuction scope of i is:", i); //outside of block let i is accessed shows error i is not defined
//    return i;
// }
//  checkScope();

 //Declare a Read-Only variable with const keyword
    // - const has all features of let but it is read only, u cannot reassign it

//  function printManyTimes(str){
//      "use strict";
//      var   sentence = str + "is cool";
//      sentence = str + " is amazing"; //reassign const shows error - change to var and see diff.

//      for(var i =0;i < str.length;i+=1){
//          console.log(sentence);
//      }
//  }
//  printManyTimes("Bharat");

// For const variable commonly used all letters are capital and instead of var mainly used let keyword.

function printManyTimes(str){
    "use strict";
    var   SENTENCE = str + "is cool";
    //SENTENCE = str + " is amazing"; //reassign const shows error - change to var and see diff.

    for(let i =0;i < str.length;i+=2){
        console.log(SENTENCE);
    }
}
printManyTimes("Bharat");

//Mutate an array declared with const
const s = [2,4,6];
function editInPlace(){
    "use strict";
    
    //s = [3,6,9]; //cannot reaasign array instead of that u can reaasign value using index
    //like this
    s[0] = 3;
    s[1] = 6;
    s[2] = 9;


}
editInPlace();
console.log(s);

// Prevent Object Mutation
function freezeObj(){
    "use strict";

    const MATH_CONSTANTS = {
       PI : 3.14
    };

    // Object.freeze(MATH_CONSTANTS);  previously object PI is changed but when u use object.freeze then it will not changed

    try{
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

// Use Arrow Functions to write concise Anonymous Functions
 
// var magic = function(){
//     return new Date();

// };

// this fun here called anonymous func bcoz it does not have name and it is assigned to variable
//Whenever u have an anonymous fun u can convert it into anonymous function
// that makes it little quicker to write
 // so see with ex. instead of word function use arrow
   
//  var magic = () => {
//     return new Date();

// };  or make more shorter


const magic = () => new Date();  // instaed of var use const

//Write Arrow Functions with Parameters

// var myConcat = function(arr1,arr2) {
//     return arr1.concat(arr2);
// };
// console.log(myConcat([1,2],[3,4,5]));

const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

// Write filter and map with arrow functions
//map function takes an array as an argument
//Filter function filters the array number depends on the condition

const reallNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x * x); //x means every element of array that is filtered make its square that is only positive no. or integers.
    return squaredIntegers;  // 4, 42, 6 -square
};
const squaredIntegers = squareList(reallNumberArray);
console.log(squaredIntegers);


//Write Higher order arrow functions
const increment = ( function(){
    return function increment(number,value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5)); //if u not passed value parameter i.e. value by default it takes 1

//Use the rest operator with function parameter
   // the rest operator is just 3 dots(...)allows u to create a function that takes variable no.of arguments and u can also take any no.of arguments
    // const sum = (function(){
    //     return function sum(...args){  //instaed of sum(x,y,z)
    //        // const args = [x,y,z];  becoz of rest operator we dont need it so with rest operator e can convert everything in one array i.e args
    //         return args.reduce((a,b) => a + b, 0);
    //  };
    // })();
    // console.log(sum(1,2,3,4,5));  //Not working

    //Use the spread operator to evaluate arrays in-place 
    // the spread operator looks just like the rest operator 3 dots
    //it takes an array and spreads out into its individual parts so here we have an array 
    
    const arr1 =  ['JAN','FEB','MARCH','APR','MAY'];
    let arr2;
    (function(){
       arr2 = [...arr1]; //so it is an array it will spread out contents of arr1 into an new array or arr2     
   
       //eventhough we are setting the index 0 to potato
       
       // arr2 = arr1;  //its not copyng arr1 to arr2 
       arr1[0] = 'potato'  //becoz we setting arr1[0] to potato and it only changed that index
    })();                   // to do that we use spread opeartor
     console.log(arr2);


     //use destructuring Assignment to assign variables from objects
//      var voxel = {x: 3.6,y:7.4,z:6.54};

//      var x = voxel.x; // x=3.6
//      var y = voxel.y; //y=7.4   this is the old way to assign value
//      var z = voxel.z; //z=6.54
// //now wwe destructre it
// const {x : a, y : b, z : c} = voxel; //a=3.6,b=7.4,c=6.54  not working

//Example
const AVG_TEMPERATURES = {
    today: 77,
    tommorow: 78
};
 function getTempOfTmrw(avgTemperatures){
     "use strict";
      const {tommorow : tempOfTommorow } = avgTemperatures;
      return tempOfTommorow ;

 }
 console.log(getTempOfTmrw(AVG_TEMPERATURES));


//Destructuring Assignment with nested objects
const LOCAL_FORECAST = {
    today: {min: 72, max: 78} ,
    tommorow:{min: 75, max: 79}
};
 function getMaxOfTmrw(forecast){
     "use strict";
      const {tommorow : {max : maxOfTommorow} } = forecast;
      return maxOfTommorow ;

 }
 console.log(getMaxOfTmrw(LOCAL_FORECAST));

 //Use Destructuring Assignment to assign variables from array
 const [z,x, , y] = [1,2,3,4,5,6]; //it will o/p 1,2,4 since 3rd place is empty and print 4th
 console.log(z,x,y);

 //another one
//  let a =4, b=6;
//  (() => {
//      "use strict";
//      [a,b] = [b,a]; //switching places
//  })();
//  console.log(a); //6
//  console.log(b); //4   'a' already declared -for evry not working

 // //Use Destructuring Assignment with the rest operatot
 const source = [1,2,3,4,5,6,7,8,9,10];
 function removeFirstTwo(list){
     const [,,...arr] = list;
     return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use Destructuring Assignment TO PASS an object as a function parameters
const states = {
max:55,
mid:34,
min:-0.90,
average:35
};

const half = (function(){
    return function half({max,min}){
 return (max + min)/2.0;
    };

})();
console.log(states);
console.log(half(states));

//create strings using templae literals

//write concise object literal declarations using  Simple Fields
// const createPerson = (name,age,gender) =>{
//   return {
//       name: name,
//       age:age,
//       gender:gender
//   };
// };

//console.log(createPerson("bharat",30,"male"));

// u can write it 
const createPerson = (name,age,gender) => ({name,age,gender});
console.log(createPerson("bharat",30,"male"));

//write concise declarative functions
const bicycle ={
    gear:2,
    setGear(newGear){    //setGear:function(newGear){    //fun inside object
        "use strict";
         this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//Use class syntax to define a consructor function
//  var space = function(target){
//      this.target =target;
//  }
//  var zeus = new space('jupitor');  this is the older way
//  console.log(zeus.target);

 //now convert it into class 
 class space{
    constructor(target){
    this.target =target;
}
 }
var zeus = new space('jupitor');
console.log(zeus.target);

//Use getters and setters to control access to an object
class Book{
    constructor(author){
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
     //setter
     set writer(updatedAuthor){
        return this._author = updatedAuthor;
    }
}

//Understand the differences between import and require

import { capitalizeString } from "./string_function";
const cap = capitalizeString("hello!!");
console.log(cap);

//use export to reuse a code block

// we can export functions and variables from one file to another so for 
//simply use export keyword for that function or variable

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);

}
export {capitalizeString } ;
 export const foo = "foo";
export const bar = "bar"; 

//use * to import everything from a file
import * as capitalizeStrings from "capitalize_strings ";

//create an export fallback with export default
export default function subtract(x,y) {return x-y ;}

//import a default export
// In this we are not using curly braces main diff bet exporting export default and importing export default
import subtract from "math_functions";
subtract(7,4);

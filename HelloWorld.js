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


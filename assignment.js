var age = 20;
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

console.log("Age: ",age);
console.log("Birth Year: ",birthYear);

function f(x) {
  var k = x;
  console.log(k);
  return;
}
f(16);

var x = 12;
var y = 10;
console.log(x+y);

var x = 12;
var y = 10;
console.log(x-y);

var x = 12;
var y = 10;
console.log(x/y);

var str = "123";
var num = Number(str);
console.log(num);
str = String(num);
console.log(str);

var num = 11;
  if(num%2==1)
  {
    console.log("Odd");
  }
  else
  {
    console.log("Even");  
  }
var age = 66;
      if(age<13 && age>0)
      {
      console.log("Child");
      } 
      else if(age>13 && age<20)
      {
       console.log("Teenager");
      }
      else if(age>19 && age<45)
      {
        console.log("Adult");
      }else{
        console.log("Senior");
      }

var n = 11;
    if(n>0)
    {
      console.log("Positive");
    }
    else if(n==0)
    {
      console.log("Zero");  
    }
    else
     {
       console.log("Negative");
     }

var light = "Green";
switch(light)
{
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Ready");
    break;
  case "Green":
    console.log("Go");
    break;
}

for(var i = 1; i<=10; i++)
  {
    console.log(i);
  }

var input = "";
while(input!="stop")
  {
    input = prompt("What do you want to stop");
  }

var i = 1;
do
{
  console.log(5*i);
  i++;
}while(i<=10);

function greet()
{
  var name = prompt("What your's name: ");
  prompt("Welcome, ",name);
}
greet();
function sum(a,b)
{
  return a+b;
}
var s = sum(33,3);
console.log(s);

function rMax(numbers)
{
  return Math.max(...numbers);
}
var m = rMax([1,22,3,4,-1,3]);
console.log(m);

const greet = () =>{
  var name = prompt("What your's name: ");
  alert("Welcome, "+name);
}
greet();

const findLongString = words => words.find(word => word.length>5);
console.log(findLongString(["apple", "bana", "cat", "elephant"]));

var arr = [1,2,3,4,5,6,7,8];
let sum = 0;
for(let i of arr)
  {
    sum+=i;
  }
console.log(sum);

let longest = "";
names = ["ali","abdullah","ahmad","industrialization"];
for(let name of names)
  {
    if(name.length>longest.length)
      {
        longest = name;
      }
  }
console.log(longest);

const removeDuplicates = numbers => {
    let uniqueNumbers = {};
    let result = [];
    for (let num of numbers) {
        if (!uniqueNumbers[num]) { 
            uniqueNumbers[num] = true;
            result.push(num);
        }
    }
    return result;
};
console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5, 6, 1]));  

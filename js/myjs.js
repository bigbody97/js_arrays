//Basic numArray with 4 diferant numerical values
var numArray = [1,2,4,5,];

//Indexing an array by using the variable array named colorArray.
//When Indexing the first item in the arry has a index of [0] which will log to the console the color "red" [1] would be "black" and so on.

var colorArray = ["red", "black","blue","green"];
console.log(colorArray[0]);

//Array element reasignment: by grabing the index [1] wich is "black" and giving it a diferant value "grey".

var colorArray = ["red", "black","blue","green"];
colorArray[1] = "grey";
console.log(colorArray[1]);

//Mixed data type array bool, int, string .
var anythingGoes = [false, 100, "Big Body"];
console.log(anythingGoes[0],anythingGoes[1],anythingGoes[2]);

//Array methods
var myFood = ["pizza","chips","bread"];
//The pop method take the last item out of the array and return it as a new variable "lastItem"
var lastItem = myFood.pop();
console.log(lastItem);
//When I console.log(myFood); bread is no longer in the myFood array.
console.log(myFood);

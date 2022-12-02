/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return " TEST SUCCEEDED";
  } else {
    return " TEST FAILED.  Expected " + expected + " found " + found;
  }
}


  // Question 1
function max(a,b){
  if(a>b){
    return a;
  }else{
    return b;
  }
};
console.log("Expected output of max(40,30) is "+max(40,30)+   myFunctionTest(40, max(40,30)));


// Question 2
function maxOfThree(a,b,c){
  return max(max(a,b),c);
};
console.log("Expected output of max(40,30, 60) is "+maxOfThree(40,30,60)+  myFunctionTest(60, maxOfThree(40,30,60)));

// Question 3
function isVowel(a){
  if(a.length == 1){
    var vowel = ['a','e','i','o','u'];
    if(vowel.includes(a)){
      return true
    }else{
      return false
    }
  }else{
    return false;
  }
};/////////
console.log("Expected output of isVowle('e') is "+isVowel('e')+ myFunctionTest(true, isVowel('e')));
console.log("Expected output of isVowle('e') is "+isVowel('n')+ myFunctionTest(false, isVowel('n')));

// Question 4.1
function sum(a){
  let sum = 0;
  for(let i=0; i<a.length; i++ ){
    sum += a[i];
  }
  return sum;
}
console.log("Expected output of sum([7,15,10.5]) is "+sum([7,15,10.5])+ myFunctionTest(32.5, sum([7,15,10.5])));

//Question 4.2
function multiply(a){
  let total = 1;
  for(let i=0; i<a.length; i++ ){
    total *= a[i];
  }
  return total;
};
console.log("Expected output of multiply([1,2,3,4]) is "+multiply([1,2,3,4]) + myFunctionTest(24, multiply([1,2,3,4])));


// Question 5
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log("Expected output of reverse(\"jag testar\") is "+reverse("jag testar") + myFunctionTest("ratset gaj", reverse("jag testar")));

// Question 6
function findLongestWord(arr){
  let longestLength = arr[0].length;
  for(let i=1; i<arr.length;i++ ){
    if(arr[i]>longestLength)  {
      longestLength = arr[i].length;
    }
  }
  return longestLength;
}
console.log("Expected output of findLongestWord(['turtles', 'apple', 'cat']) is "+findLongestWord(['turtles', 'apple', 'cat']) + myFunctionTest(7, findLongestWord(['turtles', 'apple', 'cat'])));

// Question 7
function filterLongWords(arr,len){
  let newArr=[] ;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length > len){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log("Expected output of filterLongWords(['turtles', 'apple', 'cat'],3) is "+filterLongWords(['turtles', 'apple', 'cat'],3) + myFunctionTest(JSON.stringify(['turtles', 'apple']), JSON.stringify(filterLongWords(['turtles', 'apple', 'cat'],3))));


// Question 8
const a = [1,3,5,3,3];
console.log("For the element "+ a);
// Question 8.1
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log("Value for multiply each element by 10 is "+ b.toString());

// Question 8.2
const c = a.filter(function(elem, i, array){
  return elem == 3;});
console.log("Value for return array with all elements equal to 3 is "+ c.toString() );

// Question 8.3
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log("return the product of all elements is "+ d);

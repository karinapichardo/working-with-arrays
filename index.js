/* create a function that takes in an array of strings, the strings represent words in a sentence.
This function should create, and return, a resulting sentence from the words within the array. */


// 1 input -  array of strings
function createSentence(words) {
    //result variable / accumulator
var sentence = "";
//iterating over array of strings 
  for (var i = 0; i < words.length; i++) {
//checking if string in the array is the last word
    if (i === words.length - 1){
        //if it is the last word, it adds a period
        sentence += words[i] + '.';
        //otherwise, if it's not the last word, adds a space.
    } else {
        sentence += words[i] + ' ';
    }
  }
//returning the resulted sentence
  return sentence;
}

//testing our code by calling the function
var inputSentence1 = createSentence(['Hello', 'I', 'Love', 'Programming']);
console.log(inputSentence1); // --> Hello I Love Programming.

var inputSentence2 = createSentence(['Coding', 'is', 'my', 'favorite']);
console.log(inputSentence2); // --> Coding is my favorite.
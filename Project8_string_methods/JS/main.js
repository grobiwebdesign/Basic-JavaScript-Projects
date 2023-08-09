// Concat method

function full_Sentence() {
  var part_1 = "This";
  var part_2 = " completes";
  var part_3 = " a sentence";

  var whole_Sentence = part_1.concat(part_2, part_3);

  document.getElementById('Concatenate').innerHTML = whole_Sentence;
}

// Slice Method

function slice_Method() {
  var lines = "The quick brown fox jumps over the lazy dog"
  var section = lines.slice(10,25);
  document.getElementById("slice").innerHTML = section
}

// toUpperCase method

let words = "the lovely lesowska's";
let capitalise = words.toUpperCase(); 

document.getElementById("upperCase").innerHTML = capitalise;

// search method

let words_2 = "Who wants Ice Cream?";
let position = words_2.search(/wants/);

document.getElementById("seekEr").innerHTML = position;

// numbers to string

function string_Method(){
  var X = 201;
  document.getElementById("numbers_to_string").innerHTML = X.toString();
}

// precision

function precision_Method(){
  var X = 19028.20197052;
  document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// toFixed() method challenge

let random_Number = 7.73825;
let n = random_Number.toFixed();
document.getElementById("toFix").innerHTML = n;

// valueOf method challenge

let numb = 13;
let num = numb.valueOf();
document.getElementById("valOf").innerHTML = num;
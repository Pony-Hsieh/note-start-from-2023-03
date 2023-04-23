/****************************************/
// includes
{
  // testIncludes();
  function testIncludes() {
    const sentence = "The quick brown fox jumps over the lazy dog.";
    const word1 = "fox";
    const word2 = "test";
    console.log(sentence.includes(word1)); // true
    console.log(sentence.includes(word2)); // false
    console.log(sentence.includes(new RegExp('H'))); // Uncaught TypeError: First argument to String.prototype.includes must not be a regular expression
  }
}


/****************************************/
// match
{
  // testMatch();
  function testMatch() {
    const sentence = "The quick brown fox jumps over the lazy dog.";
    const word1 = "fox";
    const word2 = "test";
    // console.log(sentence.includes(word1)); // true
    // console.log(sentence.includes(word2)); // false
    // console.log(sentence.includes(new RegExp('H'))); // Uncaught TypeError: First argument to String.prototype.includes must not be a regular expression
  }
}


/****************************************/
// search
{
  // testSearch();
  function testSearch() {
    const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

    // Any character that is not a word character or whitespace
    const regex1 = /[^\w\s]/g;

    console.log(paragraph.search(regex1)); // 43
    console.log(paragraph[paragraph.search(regex1)]); // .

    const str = "What A Beautiful Day!";
    const regex2 = /[A-Z]/g;
    const regex3 = /[.]/g;
    console.log(str.search(regex2)); // returns 0, which is the index of the first capital letter "J"
    console.log(str.search(regex3)); // returns -1 cannot find '.' dot punctuation
  }
}


/****************************************/
// indexOf
{
  // testIndexOf();
  function testIndexOf() {
    console.log("undefine".indexOf()); // -1
    console.log("undefined".indexOf()); // 0

    console.log("What A Beautiful Day!".indexOf("D", -5)); // 17
    console.log("What A Beautiful Day!".indexOf("D", 0)); // 17
    console.log("What A Beautiful Day!".indexOf("D")); // 17

    console.log("hello world hello".indexOf("world")); // 6
    console.log("hello world hello".indexOf("world", 12)); // -1

    console.log("Hello World".indexOf('o')); // 4
    console.log("Hello World".indexOf('o', 99)); // -1
  }
}


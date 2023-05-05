function outerFunction() {
  var outerVariable = "Hello, ";

  function innerFunction(name) {
    console.log(outerVariable + name);
  }

  return innerFunction;
}

var innerFunc = outerFunction();
innerFunc("Alice"); // Output: Hello, Alice
innerFunc("Bob"); // Output: Hello, Bob

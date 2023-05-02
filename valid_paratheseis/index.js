let s = "()[]{}";

var isValid = function (s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else {
      if (
        !arr.length ||
        (s[i] === ")" && arr[arr.length - 1] !== "(") ||
        (s[i] === "}" && arr[arr.length - 1] !== "{") ||
        (s[i] === "]" && arr[arr.length - 1] !== "[")
      ) {
        return false;
      }
      arr.pop();
    }
  }

  return !arr.length;
};

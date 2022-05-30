function capitalize(string) {
  return string.charAt(0).toUpperCase();
}

function reverseString(string) {
  const a = string.split('').reverse()
  return a.join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b
}

function caesarCipher (str, amount) {
  if (amount < 0) return caesarShift(str, amount + 26);
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
};

function analyzeArray(arr) {
  const average = arr.reduce((sum, current) => sum + current, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(min);
  console.log(max);
  const length = arr.length;
  return {average, min, max, length};
}
  
export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
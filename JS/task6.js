// Task 1
function formatUsername(input) {
  return input.trim().toUpperCase().replace(/\s+/g, "_");
}
console.log(formatUsername(" naveen kumar "));


// Task 2
function validateEmail(email) {
  if (email.includes("@") && email.endsWith(".com")) {
    return "Valid Email";
  }
  return "Invalid Email";
}
console.log(validateEmail("test@gmail.com"));


// Task 3
function wordCount(sentence) {
  return sentence.trim().split(/\s+/).length;
}
console.log(wordCount("javascript is very powerful language"));


// Task 4
function replaceSecondWord(str) {
  let words = str.split(" ");

  if (words.length >= 2 && words[1] === "python") {
    words[1] = "javascript";
  }

  return words.join(" ");
}
console.log(replaceSecondWord("python python developer"));


// Task 5
function checkPassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8;

  if (hasUpper && hasLower && hasNumber && hasLength) {
    return "Strong";
  }
  return "Weak";
}
console.log(checkPassword("Pass1234"));


// Task 6
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


// Task 7
function findDay(year, month, day) {
  if (month < 1 || month > 12) return "Invalid Month";
  if (day < 1 || day > 31) return "Invalid Date";

  const date = new Date(year, month - 1, day);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return "You were born on " + days[date.getDay()];
}
console.log(findDay(2003, 5, 14));


// Task 8
function startClock() {
  setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
  }, 1000);
}
// startClock();


// Task 9
function dateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
console.log(dateDifference("2026-03-01", "2026-03-25"));


// Task 10
function charFrequency(str) {
  let result = {};

  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}
console.log(charFrequency("javascript"));
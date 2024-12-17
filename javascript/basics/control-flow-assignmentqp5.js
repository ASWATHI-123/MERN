// John has entered his age and his friend's age. He wants to know if their ages are equal

const scanner = require("readline-sync")
const scanner1 = require("readline-sync")
let johnAge = scanner.questionInt("Enter John's age:")
let friendAge = scanner1.questionInt("Enter friend's age:")

if (johnAge === friendAge) {
  console.log("John and his friend are of the same age.");
} else {
  console.log("John and his friend are not of the same age.");
}

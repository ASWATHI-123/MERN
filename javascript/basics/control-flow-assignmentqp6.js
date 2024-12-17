//  Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.
// 1 Sunday
// 2 Monday
// 3 Tuesday
// 4 Wednesday
// 5 Thursday
// 6 Friday
// 7 Saturday
// Any other input Invalid Entry

const scanner= require("readline-sync");
let days = scanner.questionInt("Enter the number of the day :");
let dayname;
switch(days){
    case 1:
        dayname = "Sunday";
        break
    case 2:
        dayname = "Monday";
        break
    case 3:
         dayname = "Tuesday";
         break
    case 4:
        dayname = "Wednesday";
        break
    case 5:
        dayname = "Thursday";
        break
    case 6:
         dayname = "Friday";
         break
    case 7:
         dayname = "Saturday";
         break
}
console.log(dayname);


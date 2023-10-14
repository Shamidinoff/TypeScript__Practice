// let userName: string = "Daurenbek";
// userName.isInteger(); - mistake because string is not a number
// userName = 5; - you can't change let because string is not a number

// '', "", `` - for the string type
// 10, 0.5, 0.0001, -50, 4e10 - for the number type
// true, false - for he boolean type

const isBirthday: boolean = true;
let age: number = 29;
const userName: string = "Daurenbek Shamidinov";

if (isBirthday) {
  console.log(`Congrats ${userName.toUpperCase()}, age ${age + 1}`);
}

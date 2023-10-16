var test = null;
var test2 = null;
var test3 = "null"; // тип стринг не принимает налл
var test4 = 1993; // тип намбер тоже не принимает налл
var test5 = undefined; // андефайнд принимает андефайнд
var smth; // если никакой тип не задать, то тип автоматически станет any
function getRndData() {
    if (Math.random() < 0.5) {
        return null;
    }
    else {
        return "  Some data  ";
    }
}
var data = getRndData();
var trimmetData = data ? data.trim() : null;
// const isBirthdayData: boolean = true;
// let ageData: number = 29;
// const userNameData: string = "Daurenbek Shamidinov";
// const createError = (msg: string) => {
//   throw new Error(msg);
// };
// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday === true) {
//     return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
//   } else if (isBirthday === false) {
//     return "Too bad";
//   }
//   return createError("Error");
// }
// logBrtMsg(isBirthdayData, userNameData, ageData);
// // const smth: never = null;

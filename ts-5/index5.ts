const test: null = null;
const test2: any = null;
const test3: string = "null"; // тип стринг не принимает налл
const test4: number = 1993; // тип намбер тоже не принимает налл

const test5: undefined = undefined; // андефайнд принимает андефайнд
let smth; // если никакой тип не задать, то тип автоматически станет any

function getRndData() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return "  Some data  ";
  }
}

const data = getRndData();
const trimmetData = data ? data.trim() : null;

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

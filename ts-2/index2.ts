const isBirthdayData: boolean = true;
let ageData: number = 29;
const userNameData: string = "Daurenbek Shamidinov";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
//   } else {
//     return "Error";
//   }
// }

const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return "Error";
  }
};

logBrtMsg(isBirthdayData, userNameData, ageData);

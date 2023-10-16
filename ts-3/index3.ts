// const isBirthdayData: boolean = true;
// let ageData: number = 29;
// const userNameData: string = "Daurenbek Shamidinov";

const userData =
  '{"isBirthdayData": true, "ageData": 29, "userNameData": "Daurenbek Shamidinov"}';

const userObj = JSON.parse(userData);

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return "Error";
  }
}

logBrtMsg(isBirthdayData, userNameData, ageData);

// const logBrtMsg = (
//   isBirthday: boolean,
//   userName: string,
//   age: number
// ): string => {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
//   } else {
//     return "Error";
//   }
// };

// const isBirthdayData: boolean = true;
// let ageData: number = 29;
// const userNameData: string = "Daurenbek Shamidinov";

let salary: number; // если не задать тип вручную то тип будет any и в будущем появиться ошибка, поэтому строго нужно задать соответствующий
salary = 5000; // сюда уже нельзя писать текст, тип числовой

const userData =
  '{"isBirthdayData": true, "ageData": 29, "userNameData": "Daurenbek Shamidinov"}';

const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);

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

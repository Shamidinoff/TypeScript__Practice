const isBirthdayData: boolean = true;
let ageData: number = 29;
const userNameData: string = "Daurenbek Shamidinov";

function logBrtMsg(isBirthday: boolean, userName: string, age: number) {
  if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age ${age + 1}`);
  }
}

logBrtMsg(isBirthdayData, userNameData, ageData);

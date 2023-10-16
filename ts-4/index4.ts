const isBirthdayData: boolean = true;
let ageData: number = 29;
const userNameData: string = "Daurenbek Shamidinov";

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday === true) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else if (isBirthday === false) {
    return "Too bad";
  }
  return createError("Error");
}

logBrtMsg(isBirthdayData, userNameData, ageData);

// const smth: never = null;

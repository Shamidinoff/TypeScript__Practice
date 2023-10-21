const isBirthdayData: boolean = true;
let ageData: number = 29;
const userNameData: string = "Daurenbek Shamidinov";

const userData = {
  isBirthdayData: true,
  ageData: 29,
  userNameData: "Daurenbek Shamidinov",
};

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg(data: {
  isBirthday: boolean;
  userName: string;
  age: number;
}): string {
  if (data.isBirthday === true) {
    return `Congrats ${data.userName.toUpperCase()}, age: ${data.age + 1)}`;
  } else  {
    
    return createError("Error");
  }
}
logBrtMsg(isBirthdayData, userNameData, ageData);

// const smth: never = null; +++

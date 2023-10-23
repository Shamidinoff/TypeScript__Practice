// const isBirthdayData: boolean = true;
// let ageData: number = 29;
// const userNameData: string = "Daurenbek Shamidinov";

const userData = {
  isBirthdayData: true,
  ageData: 29,
  userNameData: "Daurenbek Shamidinov",
  messages: {
    error: 'Error',
  }
};

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({isBirthdayData, userNameData, ageData, messages: {error}}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: {error: string}
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1)}`;
  } else   { 
    return createError(error);
  }
}
logBrtMsg(userData);

// const smth: never = null; +

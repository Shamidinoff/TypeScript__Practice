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

const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];

departments.push(5);
const report = departments.filter((d: string) => d !== 'dev').map((d: string) => `${d} - done`);

const nums: number[][] = [[3, 5, 6], [3, 5, 6]];

const [first] = report;
console.log(first);


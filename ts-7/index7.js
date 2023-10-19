var isBirthdayData = true;
var ageData = 29;
var userNameData = "Daurenbek Shamidinov";
var userData = {
  isBirthdayData: true,
  ageData: 29,
  userNameData: "Daurenbek Shamidinov",
};
var createError = function (msg) {
  throw new Error(msg);
};
function logBrtMsg(data: {
  isBirthday: boolean,
  userName: string,
  age: number,
}): string {
  if (data.isBirthday === true) {
    return "Congrats "
      .concat(data.userName.toUpperCase(), ", age ")
      .concat(data.age + 1);
  } else if (data.isBirthday === false) {
    return "Too bad";
  }
  return createError("Error");
}
logBrtMsg(isBirthdayData, userNameData, ageData);
// const smth: never = null;

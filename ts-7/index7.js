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
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday === true) {
        return "Congrats ".concat(userName.toUpperCase(), ", age ").concat(age + 1);
    }
    else if (isBirthday === false) {
        return "Too bad";
    }
    return createError("Error");
}
logBrtMsg(isBirthdayData, userNameData, ageData);
// const smth: never = null;

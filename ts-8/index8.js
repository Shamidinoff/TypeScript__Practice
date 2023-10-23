// const isBirthdayData: boolean = true;
// let ageData: number = 29;
// const userNameData: string = "Daurenbek Shamidinov";
var userData = {
    isBirthdayData: true,
    ageData: 29,
    userNameData: "Daurenbek Shamidinov",
    messages: {
        error: 'Error',
    }
};
var createError = function (msg) {
    throw new Error(msg);
};
function logBrtMsg(_a) {
    var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
    if (isBirthdayData) {
        return "Congrats ".concat(userNameData.toUpperCase(), ", age: ").concat(ageData + 1);
    }
    ";\n  } else   { \n    return createError(error);\n  }\n}\nlogBrtMsg(userData);\n\n// const smth: never = null; +\n";
}

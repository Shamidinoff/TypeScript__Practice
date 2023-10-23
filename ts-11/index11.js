// const isBirthdayData: boolean = true;
// let ageData: number = 29;
// const userNameData: string = "Daurenbek Shamidinov";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var userData = {
    isBirthdayData: true,
    ageData: 29,
    userNameData: "Daurenbek Shamidinov",
    messages: {
        error: 'Error',
    }
};
var userDataTuple = [true, 40, 'John', 'Alex', 'Ann'];
// userDataTuple[3]
// userDataTuple.push(50)
// userDataTuple[3]
var res = userDataTuple.map(function (t) { return "".concat(t, " - data"); });
var bthd = userDataTuple[0], age = userDataTuple[1], userName = userDataTuple[2];
var createError = function (msg) {
    throw new Error(msg);
};
function logBrtMsg(_a) {
    var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
    if (isBirthdayData) {
        return "Congrats ".concat(userNameData.toUpperCase(), ", age: ").concat(ageData + 1);
    }
    ";\n  } else   { \n    return createError(error);\n  }\n}\nlogBrtMsg(userData);\n\nconst departments: string[] = ['dev', 'design', 'marketing'];\nconst department = departments[0];\n\ndepartments.push(5);\nconst report = departments.filter((d: string) => d !== 'dev').map((d: string) => ";
    $;
    {
        d;
    }
    -done(__makeTemplateObject([");\n\nconst nums: number[][] = [[3, 5, 6], [3, 5, 6]];\n\nconst [first] = report;\nconsole.log(first);\n\n"], [");\n\nconst nums: number[][] = [[3, 5, 6], [3, 5, 6]];\n\nconst [first] = report;\nconsole.log(first);\n\n"]));
}

var currRate = "1.05";
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var res = fetchCurr(currRate) * amount * commission;
        console.log(res);
        // Или запись в элемент на странице вместо консоли
    }
    else {
        console.log("Сейчас обмен недоступен");
    }
}
transferEurToUsd(true, 500, 1.05);
// EXAMPLE BEFORE SOLVING THE TASK
// const currRate = "1.05";
// const fetchCurr = (response) => {
// 	const data = JSON.parse(response);
// 	return data;
// };
// function transferEurToUsd(available, amount, commission) {
// 	if (available) {
// 		let res = fetchCurr(currRate) * amount * commission;
// 		console.log(res);
// 	} else {
// 		console.log("Сейчас обмен недоступен");
// 	}
// }
// transferEurToUsd(true, 500, 1.05);

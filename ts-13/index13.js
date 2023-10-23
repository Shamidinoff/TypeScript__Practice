var message = 5;
var messages = ["a", "b"];
// function printMsg(msg: string | number | boolean): void {
//     if (typeof msg === 'string' || typeof msg === 'number') {
//         console.log(msg.toString());
//     } else {
//         console.log(msg);
//     }
//     console.log(msg)
// }
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === "number") {
        console.log(msg.toFixed());
    }
    else {
        console.log(msg);
    }
}
printMsg(4);
var printReadings = function (a, b) {
    if (a === b) {
        console.log(a, b);
    }
};
var printReadings2 = function (a) {
    console.log(a.slice(0, 3));
};
function checkReadings(readings) {
    if ("system" in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getDate());
    }
    else {
        console.log(x.trim());
    }
}

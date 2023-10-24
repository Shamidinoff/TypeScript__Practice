var msg = "Hello";
msg = "Hello";
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error("Invalid port");
    }
    return "Server started";
}
startServer("https", 3001);
function createAnimation(id, animNme, timingFunc, duration, iterCount) {
    // const elem = document.querySelector(`${#${id}}`) as HTMLElement;
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    // if (elem) {
    console.log("".concat(animNme, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
    // elem.style.animation = `${animNme} ${timingFunc} ${duration} ${iterCount}`;
}
createAnimation('id', 'fade', 'ease-in', 5, 'infinite');

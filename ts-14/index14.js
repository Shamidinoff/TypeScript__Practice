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
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    var elem = document.querySelector("".concat(), { id: id });
}
") as HTMLElement;\n\n  if (elem) {\n\n    elem.style.animation = ";
$;
{
    animNme;
}
$;
{
    timingFunc;
}
$;
{
    duration;
}
$;
{
    iterCount;
}
";\n  }\n}\n\ncreateAnimation('id', 'fade', 'ease-in', 5, 'infinite');\n";

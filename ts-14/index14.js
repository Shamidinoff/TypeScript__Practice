var msg = "Hello";
msg = "Hello";
function startServer(protocol, port) {
    console.log("Server started on ".concat(protocol, "://server:").concat(port));
    return "Server started";
}
startServer("https", 3001);

let msg: "Hello" = "Hello";

msg = "Hello";

function startServer(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
}

startServer("https", 3001);

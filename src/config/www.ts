import app from "../interface"
import env from '../env/envFile'
const debug = require("debug")("src:server");
import http from "http"

const server = http.createServer(app);
const port = normalizePort(env.PORT);

export default () => {
  app.set("port", port);
  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);
};

function normalizePort(val:string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error:any) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  const addr:any = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

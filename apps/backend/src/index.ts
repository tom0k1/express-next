import { log } from "@repo/logger";
import { createServer } from "./server";
import "../db/initializer";

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

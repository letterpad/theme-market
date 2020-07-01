/**
 * Welcome to Letterpad Marketplace!
 *
 * This is the initial file which is responsible to bootup the client and the admin-dashboard.
 *
 */

const noop = () => undefined;
require.extensions[".css"] = noop;
require.extensions[".svg"] = noop;

import { AddressInfo } from "net";
import { Express } from "express";
import bodyParser from "body-parser";
import express from "express";

const bodyParserMiddleWare = bodyParser.urlencoded({
  extended: true,
});
const app = express() as Express;

app.use(bodyParserMiddleWare);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

const server = app.listen(process.env.APP_PORT, function () {
  const addressInfo = server.address() as AddressInfo;
  const host = addressInfo.address;
  const port = addressInfo.port;
  console.log("Letterpad listening at http://%s:%s", host, port);
});

module.exports = server;

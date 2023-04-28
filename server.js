const express = require("express");
const next = require("next");
const mongoose = require("mongoose");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const serverRuntimeConfig = require("./next.config").serverRuntimeConfig;

app.prepare().then(async () => {
  await mongoose.connect(serverRuntimeConfig.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = express();

  server.use(express.json());

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

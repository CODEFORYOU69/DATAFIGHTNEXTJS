const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");



//  options de limitation


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

  server.use(limiter);

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limite chaque IP à 100 requêtes par fenêtre
  message: "Trop de requêtes depuis cette IP, veuillez réessayer plus tard."
});

// Appliquez la limite de taux à toutes les requêtes


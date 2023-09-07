const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");




//  options de limitation


const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const limiter = rateLimit({
  windowMs:  60 * 1000, // 1 minutes
  max: 100, // limite chaque IP à 100 requêtes par fenêtre
  message: "Trop de requêtes depuis cette IP, veuillez réessayer plus tard."
 });



app.prepare().then(async () => {
  
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Connecté à la base de données MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Erreur de connexion à MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
    console.warn('Déconnecté de MongoDB');
});
  const server = express();
  server.use(limiter);


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





// // pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// const options = {
//   providers: [
//     // Ajoutez les fournisseurs d'authentification de votre choix, par exemple Google
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.JWT_SECRET, // Ajoutez votre clé secrète JWT dans les variables d'environnement
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET, // Utilisez la même clé secrète que celle définie précédemment
//     encryption: true, // Activez l'encryption JWT (recommandé)
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//         token.image = user.image;
//       }

//       // Vous pouvez également utiliser l'objet JWT pour manipuler le token, par exemple :
//     //   const encodedToken = await JWT.encode({ token, secret: process.env.JWT_SECRET });
//     //   const decodedToken = await JWT.decode({ token: encodedToken, secret: process.env.JWT_SECRET });

//       return token;
//     },
//     async session(session, token) {
//       session.user = {
//         id: token.id,
//         email: token.email,
//         name: token.name,
//         image: token.image,
//       };
//       return session;
//     },
//   },
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (req, res) => NextAuth(req, res, options);

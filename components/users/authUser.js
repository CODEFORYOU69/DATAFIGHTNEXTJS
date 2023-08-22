// // components/Header.tsx
// import React from "react";
// import { signIn, signOut, useSession } from "next-auth/react";

// const Header = () => {
//   const [session, loading] = useSession();

//   if (loading) {
//     return <div>Chargement...</div>;
//   }

//   return (
//     <header>
//       {!session ? (
//         <button onClick={() => signIn("google")}>Se connecter</button>
//       ) : (
//         <div>
//           <p>Bonjour {session.user.name} !</p>
//           <button onClick={() => signOut()}>Se déconnecter</button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

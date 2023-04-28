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
//         <>
//           <p>Bonjour {session.user.name} !</p>
//           <button onClick={() => signOut()}>Se déconnecter</button>
//         </>
//       )}
//     </header>
//   );
// };

// export default Header;

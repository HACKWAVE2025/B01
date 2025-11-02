// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
// import LogoImage from "../assets/images/logosaas.png";
// import { Menu, MessageSquare } from "lucide-react";
// import { Button } from "./ui/Button";

// const NavBar = () => {
//   return (
//     <div className="px-4 bg-black">
//       <div className="py-4 flex items-center justify-between">
//         <div className="relative flex items-center justify-center">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(252,214,255,0.7),rgba(41,216,255,0.7),rgba(255,253,128,0.7),rgba(248,154,191,0.7),rgba(252,214,255,0.7))] blur-2xl opacity-70 animate-gradient-glow rounded-full"></div>

//           <img
//             src={LogoImage}
//             alt="SaaS Logo"
//             className="relative z-10 h-14 w-14 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] transition-transform duration-500 hover:scale-110"
//           />
//         </div>

//         <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
//           <Menu className="text-white" />
//         </div>

//         <nav className="sm:flex sm:gap-6 sm:items-center hidden ">
//           <a
//             href="#"
//             className="text-opacity-60 text-white hover:text-opacity-100 transition duration-300"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="text-opacity-60 text-white hover:text-opacity-100 transition duration-300"
//           >
//             Features
//           </a>
//           <a
//             href="#"
//             className="text-opacity-60 text-white hover:text-opacity-100 transition duration-300"
//           >
//             Updates
//           </a>
//           <a
//             href="#"
//             className="text-opacity-60 text-white hover:text-opacity-100 transition duration-300"
//           >
//             Help
//           </a>
//           <a
//             href="#"
//             className="text-opacity-60 text-white hover:text-opacity-100 transition duration-300"
//           >
//             Customers
//           </a>
//           <SignedIn>
//             <Link
//               to="/chat"
//               className="flex items-center gap-1 text-opacity-60  text-white hover:text-opacity-100 transition duration-300"
//             >
//               <MessageSquare className="w-4 h-4" />
//               <span>Chat Bot</span>
//             </Link>
//           </SignedIn>
//           <div className="flex items-center gap-3">
//             {/* When user is signed in */}
//             <SignedIn>
//               <UserButton />
//             </SignedIn>

//             {/* When user is signed out */}
//             <SignedOut>
//               <SignInButton
//                 signInForceRedirectUrl="/dashboard"
//                 signInFallbackRedirectUrl="/dashboard"
//               >
//                 <Button variant="secondary">Sign In/Up</Button>
//               </SignInButton>
//             </SignedOut>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

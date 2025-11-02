// import React from "react";
// import { motion } from "framer-motion";
// import acmeLogo from "../assets/images/acme.png";
// import quantumLogo from "../assets/images/quantum.png";
// import echoLogo from "../assets/images/echo.png";
// import apexLogo from "../assets/images/apex.png";
// import celestialLogo from "../assets/images/celestial.png";
// import pulseLog from "../"

// const LogoTicker = () => {
//   const images = [
//     { src: acmeLogo },
//     { src: apexLogo },
//     { src: quantumLogo },
//     { src: echoLogo },
//     { src: celestialLogo },
//     { src: pulseLogo },
//   ];

//   return (
//     <div className="bg-black text-white py-[72px] sm:py-24">
//       <div className="p-4">
//         <h2 className="text-xl text-center text-white/60">
//           Trusted By Leading Healthcare Providers Worldwide
//         </h2>

//         <div className="relative overflow-hidden mt-9">
          
//           <motion.div
//             className="flex items-center gap-16"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 20,
//                 ease: "linear",
//               },
//             }}
//           >
//             {images.concat(images).map((img, index) => (
//               <img
//                 key={index}
//                 src={img.src}
//                 alt={`logo-${index}`}
//                 className="h-8 w-auto opacity-80 hover:opacity-100 transition"
//               />
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoTicker;

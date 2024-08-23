import Link from "next/link";
import { CircularText } from "./Icons";

function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:left-4 md:right-auto md:bottom-4">
      <div className="w-48 h-48 flex items-center justify-center relative md:w-24 md:h-24">
        <CircularText className="fill-dark animate-spin-slow" />
        <Link
          href="mailto:myselfabhi27@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;

// import Link from "next/link";
// import { CircularText } from "./Icons";

// function HireMe() {
//   return (
//     <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:left-0 md:right-auto md:bottom-0 md:absolute">
//       <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
//         <CircularText className={"fill-dark animate-spin-slow"} />
//         <Link
//           href="mailto:myselfabhi27@gmail.com"
//           className="flex  items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]"
//         >
//           Hire Me
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default HireMe;

import Link from "next/link";
import { CircularText } from "./Icons";
import CircularImage from "../../public/images/profile/circular.jpeg";
import Image from "next/image";

function HireMe() {
  return (
    // <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:left-0 md:right-auto md:bottom-0 md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        {/* <Image
          src={CircularImage}
          alt="hire me image"
          className={"fill-dark animate-spin-slow"}
        /> */}
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:myselfabhi27@gmail.com"
          className="flex  items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;

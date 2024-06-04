import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GitHubIcon,
  InstaIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useState } from "react";
// import useThemeSwitcher from "./Hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-white my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function NavBar() {
  // const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/blogs" title="Blogs" className="mx-4" />
          {/* <CustomLink href="/articles" title="Blogs" className="ml-4" /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/TheBinaryNumberSystem"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/goswami-abhishek/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedinIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/Abhishe69560737?t=l5vLGMGIVFr_EFaaPLHpbQ&s=08"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <XIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/the_binary_number_system/?igsh=NjVvcjZuNHJkejI3"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <InstaIcon />
          </motion.a>

          {/* <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1"
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-light"} />
          )}
        </button> */}
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-50 py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/blogs"
              title="Blogs"
              className=""
              toggle={handleClick}
            />
            {/* <CustomLink href="/articles" title="Blogs" className="ml-4" /> */}
          </nav>

          <nav className="flex items-center flex-wrap gap-8 justify-between mt-6 bg-blend-color-dodge">
            {/* <motion.a
              href="https://github.com/TheBinaryNumberSystem"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-white rounded-full"
            >
              <GitHubIcon />
            </motion.a> */}
            <motion.a
              href="https://github.com/TheBinaryNumberSystem"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-auto h-auto bg-light rounded-full border border-red-700 sm:mx-1"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/goswami-abhishek/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              // className="w-6 h-6 flex items-center justify-center border border-red-800"
              className="flex items-center justify-center w-auto h-auto bg-light rounded-full border border-blue-700 sm:mx-1"
            >
              <LinkedinIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/Abhishe69560737?t=l5vLGMGIVFr_EFaaPLHpbQ&s=08"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              // className="w-6 bg-light rounded-full"
              className="flex items-center justify-center w-auto h-auto bg-light rounded-full border border-green-700 sm:mx-1"
            >
              <XIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/the_binary_number_system/?igsh=NjVvcjZuNHJkejI3"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              // className="w-6 bg-white rounded-full"
              className="flex items-center justify-center w-auto h-auto bg-light rounded-full border border-purple-700 sm:mx-1"
            >
              <InstaIcon />
            </motion.a>

            {/* <button
    onClick={() => setMode(mode === "light" ? "dark" : "light")}
    className="ml-3 flex items-center justify-center rounded-full p-1"
  >
    {mode === "dark" ? (
      <SunIcon className={"fill-dark"} />
    ) : (
      <MoonIcon className={"fill-light"} />
    )}
  </button> */}
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;

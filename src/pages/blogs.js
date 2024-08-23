import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/featured article2.png";
import { motion, useMotionValue } from "framer-motion";
import blog1 from "../../public/images/articles/image.png";
import blog2 from "../../public/images/articles/blog2.jpg";
import blog3 from "../../public/images/articles/blog3.png";
import blog4 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import blog5 from "../../public/images/articles/create modal component in react using react portals.png";
import blog6 from "../../public/images/articles/What is Redux with easy explanation.png";
import { useRef } from "react";
import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline !items-start">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Blog = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />

      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm items-end">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedBlogs = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg text-justify">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

function blogs() {
  return (
    <>
      <Head>
        <title>Abhishek Portfolio - Articles</title>
        <meta name="blogs" content="blogs of abhishek" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            className="text-center mb-16 lg:!text-7xl sm:mb-8 sm:!text-5xl xs: !text-3xl xs:!leading-[4.6rem]"
            text="Words Can Change the World!"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedBlogs
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="https://medium.com/@jebasuthan/create-your-own-pagination-component-using-react-without-any-external-libraries-b140f79d71e2"
              img={article1}
            />

            <FeaturedBlogs
              title="Google OAuth2 using the new Google Identity Services SDK for React using Jwt-decode"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="15 min read"
              link="https://medium.com/@OloriAsabi/google-oauth2-using-the-new-google-identity-services-sdk-for-react-using-jwt-decode-d687d2e05aa2"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 underline">
            All Articles
          </h2>
          <Blog
            title="React Login Form EVM Sharding Wallet"
            date="July. 22, 2024"
            link="https://codesandbox.io/s/github/block-0x/evm-sharding-wallet/tree/main/?from-embed"
            img={blog1}
          />
          <Blog
            title="Building A Simple CRUD API With Next.js 13"
            date="June 20, 2024"
            link="https://dev.to/skipperhoa/building-a-simple-crud-api-with-nextjs-13-40eh"
            img={blog2}
          />
          <Blog
            title="React application that provides Country Information"
            date="May 18, 2024"
            link="https://request.geeksforgeeks.org/?p=1063784"
            img={blog3}
          />
          <Blog
            title="React to-do app"
            date="Apr. 15, 2024"
            link="https://github.com/ShaifArfan/react-todo-app"
            img={blog4}
          />
          <Blog
            title="Creating an Efficient React Modal Component with Hooks and Portals"
            date="Mar. 12, 2024"
            link="https://devdreaming.com/blogs/create-efficient-modal-react-portals"
            img={blog5}
          />
          <Blog
            title="Redux Simplified: A Beginner's Guide for Web Developers"
            date="Feb. 10, 2024"
            link="https://devdreaming.com/blogs/redux-simply-explained"
            img={blog6}
          />
        </Layout>
      </main>
    </>
  );
}

export default blogs;

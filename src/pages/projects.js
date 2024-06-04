import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border-solid border-dark bg-light p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        {/* <span className="text-primary font-medium text-xl">{type}</span> */}

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-lg italic font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
    <>
      <Head>
        <title>Abhishek - Projects</title>
        <meta name="projects" content="all my projects" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="text-center mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs: !text-4xl xs:!leading-[4.6rem]"
            text="Imagination Trumps Knowldge!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc mmmmmmmmmmmmmmm"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            {/* <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc mmmmmmmmmmmmmmm"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div> */}
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="dEstate: A MERN Full Stack Real Estate Application"
                img={project1}
                summary="Loremgggggggggggg ddddddddddddd ddddd sssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbb cccccccccccccccccc"
                type="Featured Project"
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;

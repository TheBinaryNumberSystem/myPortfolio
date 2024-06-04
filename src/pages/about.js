import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import myPic from "../../public/images/profile/myPic.jpeg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from "@/components/Transition";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

function about() {
  return (
    <>
      <Head>
        <title>about abhishek</title>
        <meta
          name="Abhishek Goswami"
          content="this is the portfolio of abhishek goswami"
        />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-8">
          <AnimatedText
            className="text-center pb-5 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8"
            text="Passion Fuels Purpose!"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mt-4 mb-3 text-2xl font-bold uppercase text-dark/75">
                About me
              </h2>
              <div className="font-medium text-justify mt-4 mb-4">
                <p className="mb-4">
                  - Hi there! I&apos;m <span className="italic">Abhishek</span>,
                  a recent Computer Science graduate who&apos;s passionate about
                  web development and eager to learn more about UI/UX design.
                  While I may not have extensive experience in the field,
                  I&apos;m enthusiastic about diving in and acquiring new
                  skills.
                </p>

                <p className="mb-4">
                  - My journey started with a solid grasp of HTML, CSS, and
                  JavaScript, and I&apos;ve been expanding my knowledge to
                  include popular frameworks like React and tools such as
                  Tailwind CSS and Next.js. While I&apos;m still honing my
                  design skills, I&apos;m committed to learning and improving
                  with every project.
                </p>

                <p className="mb-4">
                  - I understand that design is about more than just making
                  things look pretty – it&apos;s about solving problems and
                  creating intuitive experiences for users. Even though I&apos;m
                  at the beginning of my career, I&apos;m dedicated to adopting
                  a user-centered approach and ensuring that every project I
                  work on prioritizes the needs and preferences of the
                  end-users.
                </p>

                <p className="mb-4">
                  - While I may not have years of experience under my belt,
                  I&apos;m eager to bring my enthusiasm and commitment to
                  excellence to your next project. I&apos;m ready to roll up my
                  sleeves, learn new skills, and work hard to deliver results
                  that exceed expectations. Let&apos;s collaborate and bring
                  your vision to life together!
                </p>
              </div>
            </div>
            <div className="col-span-3 relative h-max  rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl bg-dark" />
              <Image
                src={myPic}
                alt="abhishek goswami"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col justify-between ml-[2rem] xl:col-span-8 xl:flex-row xl:items-center md:order-3 xs:flex xs:flex-col">
              <div className="xl:items-center xl:flex xl:flex-col xl:justify-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 mb-4 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="xl:items-center xl:flex xl:flex-col xl:justify-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={84} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 mb-4 ml-0 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  ranked in TITLEE-2021
                </h2>
              </div>

              <div className="xl:items-center xl:flex xl:flex-col xl:justify-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={41} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 mb-4 text-justify xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Merit Positioned in Diploma Engineering Admission
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;

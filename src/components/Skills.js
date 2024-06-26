import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold"
      // lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        {/* md:text-6xl md:mt-32 */}
        Technical Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm">
        {/* lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-CircularLightLg md:bg-CircularLightMd sm:bg-CircularLightSm */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          // lg:p-6 md:p-4 xs:text-xs xs:p-2
          whileHover={{ scale: 1.05 }}
        >
          {/* <div className="text-4xl mb-1">Web</div> */}
          {/* <div className="text-4xl">Development</div> */}
          Web
        </motion.div>

        <Skill name="HTML" x="-17vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="React.js" x="0vw" y="13.3vw" />
        <Skill name="Next.js" x="-20vw" y="-17vw" />
        <Skill name="Tailwind CSS" x="20vw" y="-12vw" />
        <Skill name="Node.js" x="33.3vw" y="-5vw" />
        <Skill name="Express.js" x="0vw" y="-20.3vw" />
        <Skill name="MongoDb" x="-25vw" y="18vw" />
        <Skill name="C/C++" x="18vw" y="17vw" />
        {/* <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" /> */}
      </div>
    </>
  );
}

export default Skills;

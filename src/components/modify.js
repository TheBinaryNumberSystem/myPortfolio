<div className="col-span-2 flex flex-col items-end justify-between">
  <div className="flex flex-col items-center justify-center text-center">
    <span className="inline-block text-7xl font-bold">
      <AnimatedNumbers value={20} />+
    </span>
    <h2 className="text-xl font-medium capitalize text-dark/75 mb-4">
      Projects Completed
    </h2>
  </div>

  <div className="flex flex-col items-center justify-center text-center">
    <span className="inline-block text-7xl font-bold">
      <AnimatedNumbers value={84} />
    </span>
    <h2 className="text-xl font-medium capitalize text-dark/75 mb-4 ml-0">
      ranked in TITLEE-2021
    </h2>
  </div>

  <div className="flex flex-col items-center justify-center text-center">
    <span className="inline-block text-7xl font-bold">
      <AnimatedNumbers value={41} />
    </span>
    <h2 className="text-xl font-medium capitalize text-dark/75 mb-4 text-justify">
      Merit Positioned in Diploma Engineering Admission 2017-18
    </h2>
  </div>
</div>;

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">
        Technical Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-CircularLight">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark">
          Web Development
        </motion.div>
      </div>
    </>
  );
}

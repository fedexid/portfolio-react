import MainLayout from "../components/MainLayout";
import StackLists from "../components/StackLists";

// Third Section
import Coding_storyset from "../assets/coding_storyset.svg";
import GitHub_logo from "../assets/GitHub_logo.svg";
import Linkedin_logo from "../assets/linkedin_logo.svg";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <MainLayout>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll bg-main">
        <section className="h-screen max-h-full snap-start snap-always px-4 py-6 text-center text-primary shadow lg:max-w-full lg:text-balance lg:px-10">
          <motion.h1
            initial={{ y: 100, scaleY: 0.5, opacity: 0 }}
            whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            className="text-xl font-bold text-secondary lg:text-4xl"
          >
            About Me
          </motion.h1>
          {/* &apos; is used instead of ' to avoid bugs */}
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5,
            }}
            className="mx-auto mt-2 text-justify text-lg leading-loose text-slate-200 lg:w-3/4 lg:pt-4 lg:text-2xl"
          >
            I have a strong interest in technology. I&apos;m a Fresh Graduate
            student Majoring in Information Systems and love to learn new things
            to improve my skills. I&apos;m motivated to learn from various
            people. I&apos;m willing to work harder to achieve everything to
            improve myself. Back in 2023, I had the opportunity to participate
            MSIB Program by Kemendikbud in Frontend Engineering Bootcamp
            organized by Skill Academy Ruangguru.
          </motion.p>
        </section>

        <section className="flex h-screen max-h-full snap-start snap-always flex-col px-4 py-2 text-center text-primary shadow lg:max-w-full lg:text-balance lg:px-10">
          <motion.h1
            initial={{ y: 100, scaleY: 0.5, opacity: 0 }}
            whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            className="text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
          >
            Tools I&apos;ve Used Before
          </motion.h1>
          <div className="flex flex-grow items-center justify-center">
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{
                duration: 1.5,
                type: "ease-in",
              }}
              className="mt-2 grid grid-cols-2 justify-items-center gap-10 text-lg lg:grid-cols-3 lg:gap-10"
            >
              <StackLists />
            </motion.ul>
          </div>
        </section>

        <section className="h-screen max-h-full snap-end snap-always px-4 py-6 text-center shadow lg:max-w-full lg:text-balance lg:px-10">
          <motion.h1
            initial={{ y: 100, scaleY: 0.5, opacity: 0 }}
            whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            className="text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
          >
            Get In Touch With Me!
          </motion.h1>
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            src={Coding_storyset}
            alt="coding illustration"
            className="mx-auto h-40 w-40 items-center justify-center lg:h-64 lg:w-64"
          />
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 80,
                damping: 10,
              }}
              href="https://www.linkedin.com/in/mhuseinn/"
              className="btn w-32 bg-slate-900 text-secondary hover:-translate-y-2 hover:scale-110"
            >
              <img src={Linkedin_logo} className="h-8 w-8" />
              <span>Linkedin</span>
            </motion.a>
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 80,
                damping: 10,
              }}
              href="https://github.com/fedexid"
              className="btn w-32 bg-slate-900 text-secondary hover:-translate-y-2 hover:scale-110"
            >
              <img src={GitHub_logo} className="h-8 w-8" />
              <span>Github</span>
            </motion.a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutMe;

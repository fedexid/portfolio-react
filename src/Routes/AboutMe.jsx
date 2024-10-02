import MainLayout from "../components/MainLayout";
import StackLists from "../components/StackLists";

// Third Section
import Coding_storyset from "../assets/coding_storyset.svg";
import GitHub_logo from "../assets/GitHub_logo.svg";
import Linkedin_logo from "../assets/linkedin_logo.svg";

const AboutMe = () => {
  return (
    <MainLayout>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll bg-main transition ease-in-out">
        <section className="h-screen max-h-full snap-start snap-always px-4 py-6 text-center text-primary shadow lg:max-w-full lg:text-balance lg:px-10">
          <h1 className="text-xl font-bold text-secondary ease-in-out lg:text-4xl">
            About Me
          </h1>
          <p className="mx-auto mt-2 text-justify text-lg leading-loose text-slate-200 lg:w-3/4 lg:pt-4 lg:text-2xl">
            I have a strong interest in technology. I'm a Fresh Graduate student
            Majoring in Information Systems and love to learn new things to
            improve my skills. I'm motivated to learn from various people. I'm
            willing to work harder to achieve everything to improve myself. Back
            in 2023, I had the opportunity to participate MSIB Program by
            Kemendikbud in Frontend Engineering Bootcamp organized by Skill
            Academy Ruangguru.
          </p>
        </section>

        <section className="flex h-screen max-h-full snap-start snap-always flex-col px-4 py-2 text-center text-primary shadow lg:max-w-full lg:text-balance lg:px-10">
          <h1 className="text-xl font-bold text-secondary sm:text-2xl lg:text-4xl">
            Tools I've Used Before
          </h1>
          <div className="flex flex-grow items-center justify-center">
            <ul className="mt-2 grid grid-cols-2 justify-items-center gap-10 text-lg lg:grid-cols-3 lg:gap-10">
              <StackLists />
            </ul>
          </div>
        </section>

        <section className="h-screen max-h-full snap-end snap-always px-4 py-6 text-center shadow lg:max-w-full lg:text-balance lg:px-10">
          <h1 className="text-xl font-bold text-secondary sm:text-2xl lg:text-4xl">
            Get In Touch With Me!
          </h1>
          <img
            src={Coding_storyset}
            alt="coding illustration"
            className="mx-auto h-40 w-40 items-center justify-center lg:h-64 lg:w-64"
          />
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <a
              href="https://www.linkedin.com/in/mhuseinn/"
              className="btn w-32 bg-slate-900 text-secondary hover:-translate-y-2 hover:scale-110"
            >
              <img src={Linkedin_logo} className="h-8 w-8" />
              <span>Linkedin</span>
            </a>
            <a
              href="https://github.com/fedexid"
              className="btn w-32 bg-slate-900 text-secondary hover:-translate-y-2 hover:scale-110"
            >
              <img src={GitHub_logo} className="h-8 w-8" />
              <span>Github</span>
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutMe;

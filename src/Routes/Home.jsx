import MainLayout from "../components/MainLayout";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ['console.log("Welcome 👋")'],
  });

  return (
    <MainLayout>
      <div className="h-full flex-grow">
        <div className="hero min-h-full bg-main">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            className="hero-content text-center"
          >
            <div className="max-w-md text-secondary">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Greetings!
              </h1>
              <h2 className="my-2 text-xl lg:text-3xl">
                I&apos;m Sein. Welcome to my Personal Website
              </h2>

              <div className="mockup-code mx-auto mt-6 w-max bg-base-300 text-third transition ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-black lg:text-lg">
                <pre data-prefix="$">
                  <code className="lg:text-lg">
                    {text}
                    <Cursor />
                  </code>
                </pre>
              </div>

              <Link
                to="/projects"
                className="btn btn-primary mt-6 bg-secondary text-lg ease-in-out hover:-translate-y-1 hover:scale-125 hover:shadow-lg hover:shadow-secondary hover:transition"
              >
                My Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

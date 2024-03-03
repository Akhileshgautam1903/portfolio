import Image from "next/image";
import Link from "next/link";
import dp from "../../public/passport_pic.jpg";
import { FaHtml5, FaJs, FaJava, FaReact, FaNodeJs, FaPython, FaCss3Alt } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="text-slate-300 lg:flex my-10 lg:my-20 px-3 gap-12">
        <div className="flex-none w-48 lg:w-fit mx-auto rounded-md overflow-hidden mb-8">
          <Image src={dp} alt="pic of akhilesh" />
        </div>
        <div className="">
          <h3 className="text-xl lg:text-2xl font-bold my-3 lg:my-0 lg:mb-3 text-sky-500">
            About me
          </h3>
          <p className="text-md lg:text-base">
            Hello there! I&apos;m Akhilesh Gautam, a recent graduate with a{" "}
            <strong className="text-sky-600 ">
              B.Tech in Computer Science from Presidency University
            </strong>
            , batch of 2023. I have a genuine passion for building things,
            especially websites. <br />I have hands-on experience with
            technologies like{" "}
            <strong className="text-sky-600 ">
              React, Next.js, Node.js, and Express
            </strong>
            . <span className="hidden lg:inline">While I wouldn&apos; t call myself a master, I am certainly more than
            average. My toolkit also includes{" "}
            <strong className="text-sky-600 ">
              SQL for database management
            </strong>
            , and I&apos;m well-versed in{" "}
            <strong className="text-sky-600 ">MongoDB</strong>.</span> <br />
            My journey is fueled by a constant desire to learn, create, and
            contribute to the ever-evolving world of technology. Welcome to my
            portfolio, where{" "}
            <strong className="text-sky-600 ">
              innovation meets creativity!
            </strong>
          </p>
          <p className="my-2 inline-block p-3 border-sky-400 border rounded-lg text-xl text-sky-500 hover:bg-sky-500 hover:text-slate-100 duration-300"><Link href="https://drive.google.com/file/d/1tb-STG3p4-vBE6rYWOUtUMueUhj9QPqe/view?usp=sharing" target="_blank">📄 My resume </Link></p>
        </div>
      </div>
      <div>
        <h3 className="text-sky-500 text-2xl font-bold text-center lg:mb-16 mb-8">My Tech Stacks</h3>
        <div className="lg:flex flex flex-wrap overflow-y-auto justify-center lg:text-8xl text-5xl gap-6 lg:gap-20 text-slate-300">
          <div className="group">
            <FaHtml5 className="flex-none text-orange-500 lg:text-slate-300 group-hover:text-orange-500 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-xs lg:text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">HTML 5</p>
          </div>
          <div className="group">
            <FaCss3Alt className="flex-none text-sky-600 lg:text-slate-300 group-hover:text-sky-600 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">CSS 3</p>
          </div>
          <div className="group">
            <FaJs className="flex-none text-yellow-300 lg:text-slate-300 group-hover:text-yellow-300 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">Js (ES6)</p>
          </div>
          <div className="group">
            <SiMongodb className="flex-none text-green-800 lg:text-slate-300 group-hover:text-green-800 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">MongoDB</p>
          </div>
          <div className="group">
            <SiExpress className="flex-none text-gray-700 lg:text-slate-300 group-hover:text-gray-700 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">Express</p>
          </div>
          <div className="group">
            <FaReact className="flex-none text-sky-400 lg:text-slate-300 group-hover:text-sky-400 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">React</p>
          </div>
          <div className="group">
            <FaNodeJs className="flex-none text-green-400 lg:text-slate-300 group-hover:text-green-400 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">NodeJS</p>
          </div>
          
          
          
          
          
          {/* <FaJava className="flex-none"/>
          <FaPython className="flex-none"/> */}
        </div>
      </div>
    </>
  );
};

export default About;

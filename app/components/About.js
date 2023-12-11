import Image from "next/image";
import Link from "next/link";
import dp from "../../public/passport_pic.jpg";
import { FaHtml5, FaJs, FaJava, FaReact, FaNodeJs, FaPython, FaCss3Alt } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="text-slate-300 sm:flex my-10 sm:my-20 px-3 sm:px-40 gap-12">
        <div className="flex-none w-48 sm:w-fit mx-auto rounded-md overflow-hidden mb-8">
          <Image src={dp} alt="pic of akhilesh" />
        </div>
        <div className="">
          <h3 className="text-xl sm:text-2xl font-bold my-3 sm:my-0 sm:mb-3 text-sky-500">
            About me
          </h3>
          <p className="text-md sm:text-base">
            Hello there! I&apos;m Akhilesh Gautam, a recent graduate with a{" "}
            <strong className="text-sky-600 underline decoration-wavy decoration-emerald-700">
              B.Tech in Computer Science from Presidency University
            </strong>
            , batch of 2023. I have a genuine passion for building things,
            especially websites. <br />I have hands-on experience with
            technologies like{" "}
            <strong className="text-sky-600 underline decoration-wavy decoration-emerald-700">
              React, Next.js, Node.js, and Express
            </strong>
            . <span className="hidden sm:inline">While I wouldn&apos; t call myself a master, I am certainly more than
            average. My toolkit also includes{" "}
            <strong className="text-sky-600 underline decoration-wavy decoration-emerald-700">
              SQL for database management
            </strong>
            , and I&apos;m well-versed in{" "}
            <strong className="text-sky-600 underline decoration-wavy decoration-emerald-700">MongoDB</strong>.</span> <br />
            My journey is fueled by a constant desire to learn, create, and
            contribute to the ever-evolving world of technology. Welcome to my
            portfolio, where{" "}
            <strong className="text-sky-600 underline decoration-wavy decoration-emerald-700">
              innovation meets creativity!
            </strong>
          </p>
          <p className="my-2 inline-block p-3 border-sky-400 border rounded-lg text-xl text-sky-500 hover:bg-sky-500 hover:text-slate-100 duration-300"><Link href="https://drive.google.com/file/d/1BDiI6YSY6Gjr7U3_Jvuv9PX0J91eqfRt/view?usp=sharing" target="_blank">📄 My resume </Link></p>
        </div>
      </div>
      {/* <div
        x-data="{}"
        x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image src={dp} alt="Facebook" />
          </li>
          <li>
            <Image src={dp} alt="Disney" />
          </li>
          <li>
            <Image src={dp} alt="Airbnb" />
          </li>
          <li>
            <Image src={dp} alt="Apple" />
          </li>
          <li>
            <Image src={dp} alt="Spark" />
          </li>
          <li>
            <Image src={dp} alt="Samsung" />
          </li>
          <li>
            <Image src={dp} alt="Quora" />
          </li>
          <li>
            <Image src={dp} alt="Sass" />
          </li>
        </ul>
      </div> */}
      <div>
        <h3 className="text-sky-500 text-2xl font-bold text-center sm:mb-16 mb-8">My Tech Stacks</h3>
        <div className="sm:flex flex flex-wrap overflow-y-auto justify-center sm:text-8xl text-5xl gap-6 sm:gap-20 text-slate-300">
          <div className="group">
            <FaHtml5 className="flex-none text-orange-500 sm:text-slate-300 group-hover:text-orange-500 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-xs sm:text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">HTML 5</p>
          </div>
          <div className="group">
            <FaCss3Alt className="flex-none text-sky-600 sm:text-slate-300 group-hover:text-sky-600 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">CSS 3</p>
          </div>
          <div className="group">
            <FaJs className="flex-none text-yellow-300 sm:text-slate-300 group-hover:text-yellow-300 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">Js (ES6)</p>
          </div>
          <div className="group">
            <SiMongodb className="flex-none text-green-800 sm:text-slate-300 group-hover:text-green-800 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">MongoDB</p>
          </div>
          <div className="group">
            <SiExpress className="flex-none text-gray-700 sm:text-slate-300 group-hover:text-gray-700 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">Express</p>
          </div>
          <div className="group">
            <FaReact className="flex-none text-sky-400 sm:text-slate-300 group-hover:text-sky-400 transition-all duration-500 ease-in-out"/>
            <p className="invisible group-hover:visible text-sm text-center mb-2 group-hover:translate-y-1 transition-all duration-300 ease-in-out">React</p>
          </div>
          <div className="group">
            <FaNodeJs className="flex-none text-green-400 sm:text-slate-300 group-hover:text-green-400 transition-all duration-500 ease-in-out"/>
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

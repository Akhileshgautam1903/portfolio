import { Modak } from "next/font/google";
import { Poppins } from "next/font/google";

import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";

import Image from "next/image";
import pfp from "../../public/motorbike_ride.png";

//some fonts
//Kanit
//QuickSand
//Dosis
//Bricolage_Grotesque++
//Gluten

const phudu = Modak({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="flex flex-col item-center my-8 sm:my-24 text-gray-100 text-center relative">
      <h1 className={`text-4xl sm:text-9xl leading-snug ${phudu.className}`}>
        Hi, I'm Akhilesh. <br /> A Web Developer.
      </h1>
      <p
        className={`${poppins.className} p-5 px-9 text-xs sm:text-lg text-gray-300 my-3`}
      >
        I'm passionate about turning ideas into <strong className="text-sky-600 underline decoration-wavy decoration-emerald-700">captivating digital experiences </strong> .
      </p>
      <div className="social flex gap-10 text-xl justify-center sm:text-4xl">
        <a href="https://github.com/Akhileshgautam1903"><BsGithub className="hover:text-sky-500" /></a>
        <a href="https://www.linkedin.com/in/akhilesh-gautam-here/"><BsLinkedin className="hover:text-sky-500"/></a>
        <a href="https://twitter.com/AkhileshGa64121"><BsTwitterX className="hover:text-sky-500" /></a>
      </div>
      {/* <div className="w-20 h-20 absolute right-96 -top-20">
        <Image src={pfp} className="rounded-full" />
      </div> */}
      <div className="absolute right-0 -bottom-20 w-28 h-28 sm:w-52 sm:h-52">
        <Image src={pfp} alt="bike riding" />
      </div>
    </div>
  );
};

export default Hero;

'use client'  // i have to use use client for router.push to work

import { Phudu } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation"; //i have to import it from next/navigation instead of next/router

const phudu = Phudu({ subsets: ["latin"] });

const ProjectCard = ({ className, head, sub, imgSrc, wide, link }) => {

  const router = useRouter();

  return (
      <div
        className={`group h-96 rounded-3xl overflow-hidden hover:-translate-y-2 duration-300 my-3 mx-2 cursor-pointer ${className}`}
        onClick={() => router.push(link)}
      >
        <div className="p-8 text-right relative">
          {/* <Image src={fancyImgT} alt="icon-1" className="absolute w-16 h-16 invisible group-hover:visible group-hover:-translate-x-8 left-10 -bottom-20 duration-300"/>
        <Image src={fancyImgL} alt="icon-2" className="absolute w-16 h-16 invisible group-hover:visible group-hover:-translate-y-4 left-20 top-12 duration-300"/> */}
          <h1>{head}</h1>
          <p className={`${phudu.className} font-bold text-xl`}>{sub}</p>
          {wide ? (
            <Image
              src={imgSrc}
              alt="display img big"
              className="absolute sm:scale-100 sm:left-20 sm:top-24 rounded-lg scale-150 top-40 left-36 group-hover:translate-y-2 duration-700"
            />
          ) : (
            <Image
              src={imgSrc}
              alt="display img small"
              className="absolute sm:scale-150 sm:left-48 sm:top-34 rounded-lg scale-150 top-40 left-36 group-hover:translate-y-2 duration-700"
            />
          )}
        </div>
      </div>
  );
};

export default ProjectCard;

// https://workout-buddy.cyclic.app
// https://zen-diary.onrender.com/
// https://akhileshgautam1903.github.io/Exploreearth/
// https://advice-generator-fw1b.onrender.com/

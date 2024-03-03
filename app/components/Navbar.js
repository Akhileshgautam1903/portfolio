import { Oswald } from "next/font/google";
import Image from "next/image";
import pfp from "../../public/grin_smile_logo.png"
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 mt-2 sm:w-3/4 sm:mx-auto text-slate-100 items-center">
      <div className="flex items-center">
        <Image className="w-14 h-14" src={pfp} alt="profile img" />
        <h1 className={`invisible sm:visible text-lg sm:text-xl mt-4 ${oswald.className}`}>AKHILESH GAUTAM</h1>
      </div>
      <Link href="https://drive.google.com/file/d/1tb-STG3p4-vBE6rYWOUtUMueUhj9QPqe/view?usp=sharing" target="_blank">
        <button className={`sm:text-md bg-sky-500 py-1 px-3 rounded-md hover:bg-sky-700 duration-150 ${oswald.className}`}>
          Resume
        </button>
      </Link>
      
    </div>
  );
};

export default Navbar;

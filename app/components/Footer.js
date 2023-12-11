import { BsLinkedin, BsInstagram, BsGithub, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="p-6 py-10 text-center sm:px-80">
      <h3 className="text-xl text-sky-500 font-bold my-3">Get in touch</h3>
      <p className="text-sm text-slate-500">Let's create something exceptional together! Whether you have a job offer or want to hire me for web development, creative design, or problem-solving, let's make it happen! <br />
      Your vision, my expertise - <strong className="text-sky-700">let's connect and elevate your digital presence</strong>.</p>
      <p className="my-7"><a className="px-5 py-2 bg-sky-500 text-slate-100 rounded-lg hover:bg-sky-700 duration-150" href="mailto:akhileshgautam19@gmail.com">Reach Out</a></p>
      <div className="social flex gap-10 text-xl justify-center sm:text-lg my-6 mt-12 text-slate-400 ">
        <a href="https://github.com/Akhileshgautam1903"><BsGithub className="hover:text-sky-500" /></a>
        <a href="https://www.linkedin.com/in/akhilesh-gautam-here/"><BsLinkedin className="hover:text-sky-500"/></a>
        <a href="https://twitter.com/AkhileshGa64121"><BsTwitterX className="hover:text-sky-500" /></a>
      </div>
    </div>
  );
}
 
export default Footer;
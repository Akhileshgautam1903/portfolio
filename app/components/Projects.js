import ProjectCard from "./ProjectCard";
import web1 from "../../public/website_1.png"
import web2 from "../../public/website_2.png"
import web3 from "../../public/website_3.png"
import web4 from "../../public/website_4.png"


const Projects = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-18">
      <ProjectCard head="Workout Buddy" sub="MERN STACK" imgSrc={web1} className="bg-emerald-400" link="https://workout-buddy.cyclic.app"/>
      <ProjectCard head="Zen Diary" sub="MERN STACK" imgSrc={web2} className="sm:col-span-2 bg-pink-400" wide={true} link="https://zen-diary.onrender.com/"/>
      <ProjectCard head="Explore Earth" sub="HTML/CSS BOOTSTRAP" imgSrc={web3} className="sm:col-span-2 bg-red-400" wide={true} link="https://akhileshgautam1903.github.io/Exploreearth/"/>
      <ProjectCard head="Advice Generator" sub="NODE APIs" imgSrc={web4} className="bg-purple-400" link="https://advice-generator-fw1b.onrender.com/"/>
    </div>
  );
}
 
export default Projects;
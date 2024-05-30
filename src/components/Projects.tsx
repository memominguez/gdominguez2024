import Image from "next/image";
import causticBlending from "@/assets/images/caustic-blending.jpg";
import glanceCollision from "@/assets/images/glance-collision.jpg";
import ageCalculator from "@/assets/images/age-calculator.jpg";
import aritmetiquis from "@/assets/images/aritmetiquis.jpg";
import bmiCalculator from "@/assets/images/bmi-calculator.jpg";
import palabricidio from "@/assets/images/palabricidio.jpg";
import projectTemplate from "@/assets/images/project-template.jpg";
import readAdvice from "@/assets/images/read-an-advice.jpg";
import tipCalculator from "@/assets/images/tip-calculator.jpg";
import ProjectsCard from "./ProjectsCard";
import { projectsList } from "@/data/data";

const Projects: React.FC = () => {
  return (
    <section className="bg-slate-950 pt-6 pb-6 mx-auto border-b w-[343px] md:w-[708px] xl:w-[1110px]">
      <h1 className="text-slate-200 text-3xl font-bold text-center mb-12">
        Samples of my work
      </h1>
      <div className="bg-slate-950 grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {projectsList.map((project) => (
          <ProjectsCard
            key={project.id}
            projectImg={project.projectImg}
            title={project.title}
            skill1={project.skill1}
            skill2={project.skill2}
            skill3={project.skill3}
            liveURL={project.liveURL}
            alt={project.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

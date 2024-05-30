import Image, { StaticImageData } from "next/image";

interface ProjectsProps {
  projectImg: StaticImageData;
  title: string;
  skill1: string;
  skill2: string;
  skill3: string;
  liveURL: string;
  alt: string;
}

const ProjectsCard: React.FC<ProjectsProps> = ({
  projectImg,
  title,
  skill1,
  skill2,
  skill3,
  liveURL,
  alt,
}) => {
  return (
    <article className="pb-6 mb-6 flex flex-col items-center">
      <div className="overflow-hidden w-[343px] xl:w-[540px] rounded-xl">
        <Image
          src={projectImg}
          alt={alt}
          width={343}
          height={229}
          className="mb-2 xl:hidden hover:scale-[1.07] transition-all duration-300"
        />
        <Image
          src={projectImg}
          alt={alt}
          width={540}
          height={360}
          className="hidden xl:block mb-2 hover:scale-[1.07] transition-all duration-300"
        />
      </div>
      <h2 className="text-slate-200 text-xl font-bold xl:text-2xl">{title}</h2>
      <div className="flex gap-3 mb-2">
        <p className="text-slate-200">{skill1}</p>
        <p className="text-slate-200">{skill2}</p>
        <p className="text-slate-200">{skill3}</p>
      </div>
      <div
        className="text-white text-center underline underline-offset-4 
                decoration-solid decoration-amber-600 md:text-left"
      >
        <a href={liveURL} target="_blank">VIEW PROJECT</a>
      </div>
    </article>
  );
};

export default ProjectsCard
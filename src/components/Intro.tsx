import Image from "next/image";
import avatar from "@/assets/images/avatar-bg.png";
import { Spotlight } from "./ui/Spotlight";

export default function Intro() {
  return (
    <section
      id="intro"
      className="bg-slate-950 w-[343px] h-[490px] mx-auto border-b flex flex-col
        md:w-[708px] md:flex-row-reverse md:h-[300px] xl:w-[1110px]"
    >
      <Spotlight className="top-0 left-28 md:left-[500px] xl:left-[700px]" />

      <div
        className="w-full flex flex-row justify-center items-center pt-6 pb-6 px-2
            md:basis-1/4"
      >
        <Image
          src={avatar}
          alt="My avatar"
          width={127}
          height={119}
          className="rounded-3xl md:hidden"
        />
        <Image
          src={avatar}
          alt="My avatar"
          width={169}
          height={159}
          className="rounded-3xl hidden md:block xl:hidden"
        />
        <Image
          src={avatar}
          alt="My avatar"
          width={203}
          height={191}
          className="rounded-3xl hidden xl:block"
        />
      </div>
      <div className="w-full px-2 md:basis-3/4 md:flex md:flex-col md:justify-center md:py-0">
        <h1
          className="text-3xl text-slate-200 font-bold flex flex-col items-center mb-6
            md:flex-row md:justify-start xl:text-4xl"
        >
          <span> Nice to meet you! &nbsp; </span>
          <span>
            I&apos;m{" "}
            <span className="underline underline-offset-4 decoration-4 decoration-amber-600">
              Guillermo
            </span>
          </span>
        </h1>
        <p className="text-slate-200 text-sm text-center leading-7 mb-8 md:text-base md:text-start">
          Based in El Salvador, I&apos;m a front-end web developer, since 2021.
          <br />
          Just passionate and ready to support your business.
        </p>

        <div className="text-center md:text-start">
          <a
            href="#contact"
            className="text-slate-200 underline underline-offset-[10px] decoration-2 decoration-amber-600"
          >
            CONTACT ME
          </a>
        </div>      
      </div>
    </section>
  );
}

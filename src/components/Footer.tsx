"use client"

import Image from "next/image";
import Logo from "@/assets/images/guillermo-logo.png";
import Linkedin from '@/assets/images/linkedin-logo.png'

export default function Footer() {

  const linkedInUrl = 'https://www.linkedin.com/in/guillermo-dominguez-03226734';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(linkedInUrl);
      alert('LinkedIn URL copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }; 

  return (
    <footer className="bg-slate-950 border-t w-[375px] mx-auto h-fit md:w-[768px] xl:w-[1280px]">
      <div className="w-full grid auto-rows-auto md:grid-rows-1 md:grid-cols-2 xl:grid-cols-3">

        <div className="flex justify-center bg-slate-900">
          <Image src={Logo} width={120} height={120} alt="Logo" />
        </div>

        <div className="hidden xl:flex items-center px-4 bg-slate-900">
            <p className="text-slate-200">This webpage is developed in NextJS, Tailwind CSS, Typescript.</p>
        </div>

        <div className="flex justify-center items-center gap-3 py-4 px-6 bg-slate-900 ">
          <p className="text-slate-200">
            Know more about me
          </p>
          <button onClick={copyToClipboard}>
          <Image src={Linkedin} width={40} height={40} alt="Linkedin" />
          </button>
        </div>

      </div>
    </footer>
  );
}

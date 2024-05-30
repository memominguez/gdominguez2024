"use client";

import { Button, MovingBorder } from "@/components/ui/moving-border";

export default function SubmitForm() {
  return (
    <section 
      id="contact"
      className="bg-slate-950 w-[375px] mx-auto h-fit pt-8 pb-12 md:w-[768px] xl:w-[1110px]"
    >
      <div className="w-[343px] mx-auto md:w-[708px] xl:w-[1110px] xl:flex xl:flex-row xl:justify-between">
        <div className="bg-dark-gray w-full mx-auto mb-10 md:w-[445px] xl:mx-0 xl:pt-6 xl:pl-20">
          <h1
            className="text-slate-200 text-[40px] font-bold text-center 
            xl:text-left xl:text-7xl xl:mb-6"
          >
            Contact
          </h1>
          <p className="text-slate-200 text-center mb-6 xl:text-left xl:mb-12">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible
          </p>

          <div className="text-center xl:text-start">
            <a
              href="#intro"
              className="text-slate-200 underline underline-offset-[10px] decoration-2 decoration-amber-600"
            >
              BACK TO TOP
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center w-[343px] mx-auto pb-6 md:w-[445px] xl:mx-0">
          <Button
            borderRadius="1.75rem"
            className="bg-slate-900 text-slate-200 border-neutral-200"
          >
          <a href="https://contact-gdominguez.netlify.app" target="_blank">OPEN FORM</a>
          </Button>      
        </div>
      </div>
    </section>
  );
}

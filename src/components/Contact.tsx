"use client"

import { useState } from "react"

export default function Contact() {
// https://web3forms.com/#start


  return (
    <section
      id="contact"
      className="bg-slate-950 border-b w-[375px] mx-auto h-fit pt-8 pb-12 md:w-[768px] xl:w-[1110px]"
    >
    <div className="w-[343px] mx-auto md:w-[708px] xl:w-[1110px] xl:flex xl:flex-row xl:justify-between">
      <div className="bg-dark-gray w-full mx-auto mb-10 md:w-[445px] xl:mx-0 xl:pt-6">
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


      <form className="flex flex-col w-[343px] mx-auto pb-6 md:w-[445px] xl:mx-0">
        <input
          type="text"
          placeholder="NAME"
          className="w-full p-3 mb-6 outline-none text-slate-200 bg-transparent 
                  border-0 border-b-2 border-slate-200"
        />
        <input
          type="email"
          placeholder="EMAIL"
          className="w-full p-3 mb-6 outline-none text-slate-200 bg-transparent 
                  border-0 border-b-2 border-slate-200"
        />
        <textarea
          placeholder="MESSAGE"
          className="w-full p-3 mb-6 outline-none text-slate-200 bg-transparent 
                  border-0 border-b-2 border-slate-200"
        ></textarea>

        <button
          type="submit"
          className="text-slate-200 text-center underline underline-offset-[10px] 
                decoration-2 decoration-amber-600 md:text-end mb-10"
        >
          SEND MESSAGE
        </button>
        <p className="text-slate-200 text-center">Or my WhatsApp +503 7210 5103</p>
      </form>
    </div>
  </section>
  )
}

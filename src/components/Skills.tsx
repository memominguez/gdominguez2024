import {
  LottieAnimation1,
  LottieAnimation4,
  LottieAnimation5,
  LottieAnimation7,
  LottieAnimation8,
} from "@/lotties/LottieAnimation.";

export default function Skills() {
  return (
    <section className="bg-slate-950 pt-6 pb-6 border-b w-[343px] mx-auto md:w-[708px] xl:w-[1110px]">
      <h1 className="text-slate-200 text-3xl font-bold text-center mb-6">
        My skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col items-center py-6">
          <h2 className="text-slate-200 text-2xl font-bold">HTML</h2>
          <div className="w-[160px] h-[160px]">
            <LottieAnimation1 />
          </div>
        </div>

        <div className="flex flex-col items-center py-6">
          <h2 className="text-slate-200 text-2xl font-bold">CSS / Tailwind</h2>
          <div className="w-[160px] h-[160px]">
            <LottieAnimation5 />
          </div>
        </div>

        <div className="flex flex-col items-center py-6">
          <h2 className="text-slate-200 text-2xl font-bold">Javascript</h2>
          <div className="w-[160px] h-[160px]">
            <LottieAnimation8 />
          </div>
        </div>

        <div className="flex flex-col items-center py-6">
          <h2 className="text-slate-200 text-2xl font-bold">React / NextJS</h2>
          <div className="w-[160px] h-[160px]">
            <LottieAnimation4 />
          </div>
        </div>
      </div>
    </section>
  );
}

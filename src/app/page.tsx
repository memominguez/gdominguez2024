import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";
import SubmitForm from "@/components/SubmitForm";

export default function Home() {
  return (
    <>
    <Intro />
    <Skills />
    <Projects /> 
    <SubmitForm />
    <Footer />
    </>
  );
}

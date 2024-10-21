import Image from "next/image";
import Headsection from "../../components/headsection";
import AboutUs from "../../components/aboutus";
import Skills from "../../components/skills";
import Services from "../../components/services";
import TechStack from "../../components/techstack";

export default function Home() {
  return (
    <>

      <Headsection />
      <AboutUs />
      <Skills />
      <Services />
      <TechStack />
    </>
  );
}

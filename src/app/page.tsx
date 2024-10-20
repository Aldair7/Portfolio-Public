import Image from "next/image";
import Headsection from "../../components/headsection";
import AboutUs from "../../components/aboutus";
import Skills from "../../components/skills";
import Services from "../../components/services";

export default function Home() {
  return (
    <>

      <Headsection />
      <AboutUs />
      <Skills />
      <Services />

    </>
  );
}

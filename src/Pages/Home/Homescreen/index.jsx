import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Travel from "../Travel";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <MySkills /> */}
      <AboutMe />
      <Travel />
      <Footer />
    </>
  );
}
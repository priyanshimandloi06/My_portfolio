import IconSprite from "@/components/IconSprite";
import BackgroundFx from "@/components/BackgroundFx";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import CodingProfiles from "@/components/CodingProfiles";
import Connect from "@/components/Connect";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <IconSprite />
      <BackgroundFx />
      <ScrollProgress />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Connect />
      </main>
      <footer>Designed &amp; built as Priyanshi Mandloi&apos;s personal portfolio.</footer>
      <BackToTop />
    </>
  );
}

import Work from "@/components/ui/work";
import GetInTouch from "./components/GetInTouch";
import Hero from "../components/hero/Hero";
import AboutMe from "@/components/ui/about-me";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Work />
      <GetInTouch />
    </div>
  );
}

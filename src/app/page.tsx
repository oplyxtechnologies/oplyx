import About from "@/components/About/About";
import Hero from "../components/Hero/hero";
import MarqueeComponent from "@/utils/MarqueeComponent";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeComponent />

      <About />
    </div>
  );
}

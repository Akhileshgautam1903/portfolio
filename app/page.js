import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <main className="sm:w-3/4 sm:mx-auto">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  )
}

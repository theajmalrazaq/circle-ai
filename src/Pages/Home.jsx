import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Secone from "../Components/Secone";
export function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <Secone />
    </>
  );
}

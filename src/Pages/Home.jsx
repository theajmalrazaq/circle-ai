import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Trustsec from "../Components/TrustSec";
import Secone from "../Components/Secone";
export function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <Trustsec />
      <Secone />
    </>
  );
}

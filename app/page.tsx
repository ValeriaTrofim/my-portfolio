import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import LatestWork from "./components/LatestWork";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <LatestWork />
      <Connect />
    </>
  );
}

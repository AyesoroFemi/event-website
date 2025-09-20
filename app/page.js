import About from "@/components/About";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";
import Theme from "@/components/Theme";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Theme/>
    <Feature/>
    <Gallery/>
    <JoinUs/>
    <Speakers/>
    <Footer/>
   </div>
  );
}

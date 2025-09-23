import AboutEvent from "@/components/AboutEvent"
import AboutHero from "@/components/AboutHero"
import Navbar from "@/components/Navbar"

function About() {
  return (
    <div>
      <Navbar />
      <AboutHero/>
      <AboutEvent/>
    </div>
  )
}

export default About
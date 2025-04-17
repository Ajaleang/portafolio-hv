import AboutMe from '../components/AboutMe';
import Testimonials from '../components/Testimonials';
import Skills from '../components/skills';
import Education from '../components/Education';
const About = () => {
  return (
    <div className="py-16 px-6">
      <AboutMe />
      <Skills />
      <Education />
      <Testimonials />
    </div>
  );
};

export default About;

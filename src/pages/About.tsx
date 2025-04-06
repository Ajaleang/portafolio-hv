import AboutMe from '../components/AboutMe';
import Testimonials from '../components/Testimonials';
import Skills from '../components/skills';
const About = () => {
  return (
    <div className="py-16 px-6">
      <AboutMe />
      <Skills />
      <Testimonials />
    </div>
  );
};

export default About;

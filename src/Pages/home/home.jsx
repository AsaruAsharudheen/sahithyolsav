import About from '../../Components/About/about';
import Footer from '../../Components/Footer/footer';
import PinterestGallery from '../../Components/Gallery/gallery';
import Hero from '../../Components/Hero/hero';
import ProgramStatsAlt from '../../Components/programdetails/program';
import RelatedEvents from '../../Components/RelatedEvents/relatedevents';
import Sponsors from '../../Components/Sponsors/sponsors';
import Timeline from '../../Components/Timeline/timeline';
import './home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramStatsAlt />
      <About />
      <Sponsors />
      <Timeline />
      <RelatedEvents />
      <PinterestGallery />
      <Footer />
    </>
  );
};

export default Home;

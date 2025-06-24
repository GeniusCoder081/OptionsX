// import Footer from '../components/Footer'
import Benefits from '../components/Benefits';
import BestSellers from '../components/BestSellers';
import Category from '../components/Category';
import FeatureCreator from '../components/FeatureCreator';
import Footerhome from '../components/Footerhome';
import Headertop from '../components/Headertop';
import Hero from '../components/Hero';
import Perfecttheme from '../components/Perfecttheme';
import Process from '../components/Process';
const Home = () => {
  return (
    <>
    <Headertop/>
    <Hero/>
    <Category />
      <Benefits/>
      <BestSellers/>
      <Process/>
      <FeatureCreator/>
      <Perfecttheme/>
      <Footerhome/>
    </>
  )
}

export default Home
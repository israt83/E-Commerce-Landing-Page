import BestSellers from "../components/home/BestSellers"
import FeaturedCollections from "../components/home/FeaturedCollections"
import Hero from "../components/home/Hero"
// import Newsletter from "../components/home/Newsletter"
import StatsBar from "../components/home/StatsBar"
import SwissCraftsmanship from "../components/home/SwissCraftsmanship"
import Testimonial from "../components/home/Testimonial"
import FeaturedProducts from "../components/product/FeaturedProducts"


const Home = () => {
  return (
   <div>
    <Hero/>
    <StatsBar/>

      <FeaturedCollections />
      <FeaturedProducts/>
      <SwissCraftsmanship />
      <BestSellers />
      <Testimonial />
      {/* <Newsletter/> */}
   </div>
  )
}

export default Home
import Hero from '../components/hero/Hero'
import Category from '../components/category/Category'
import Seller from '../components/seller/Seller'
import products from '../data/Products'
import PetWellness from '../components/petWellness/PetWellness'
import TrendingCollection from '../components/trendingCollection/TrendingCollection'
import Testimonial from '../components/testimonial/Testimonial'
import Blog from '../components/blog/Blog'
import Newsletter from '../components/newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Seller products={products} />
      <PetWellness />
      <TrendingCollection />
      <Testimonial />
      <Blog />
      <Newsletter />
    </div>
  )
}

export default Home

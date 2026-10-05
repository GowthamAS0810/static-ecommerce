import '../header/style.css'
import './hero/style.css'
import './category/style.css'
import './arrivals/style.css'
import './home.css'
import './story/style.css'
import './explore/style.css'
import '../footer/style.css'
import Header from '../header/header.jsx'
import Hero from './hero/hero.jsx'
import Category from './category/category.jsx'
import Arrivals from './arrivals/arrivals.jsx'
import Story from './story/story.jsx'
import Explore from './explore/explore.jsx'
import Footer from '../footer/footer.jsx'
function Home({ onNavigate }) {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <Hero />
      <Category />
      <Arrivals />
      <Story />
      <Explore />
      <Footer />
    </>
  )
}

export default Home

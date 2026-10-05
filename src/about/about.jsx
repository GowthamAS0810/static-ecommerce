import './about.css'
import '../header/style.css'
import './main story/style.css'
import '../footer/style.css'
import './brand mission/style.css'
import './brand values/style.css'
import './path/style.css'
import './visit/style.css'
import './founders/style.css'
import './banner/style.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import MainStory from './main story/main-story.jsx'
import BrandMission from './brand mission/brand-mission.jsx'
import Values from './brand values/values.jsx'
import Path from './path/path.jsx'
import Visit from './visit/visit.jsx'
import Founders from './founders/founder.jsx'
import Banner from './banner/banner.jsx'
function About({ onNavigate }){
    return(
        <>
            <Header onNavigate={onNavigate} />
            <MainStory />
            <BrandMission />
            <Values />
            <Path/>
            <Visit/>
            <Founders/>
            <Banner />
            <Footer />
        </>
    )
}
export default About
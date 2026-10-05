import heroImg from "../../assets/Home/hero_section/image1.png"
function Hero() {
    return(
        <div className="hero">
            <div className="img-container">
                <img className="hero-img" src={heroImg} alt="Hero" />
            </div>
            
            <div className="hero-content">
                <p className="hero-item" style={{ color: 'greenyellow', fontSize: '14px' }}>AUTUMN / WINTER '26 COLLECTION</p>
                <h1 className="hero-item" style={{ color: 'white' }}>Chase<br />Every Second.</h1>
                <p className="hero-item" style={{ color: 'rgb(218, 216, 216)' }}>Race-day gear, trail-tested essentials, and everyday kit-<br />curated by runners, worn on every terrain.</p>
                <div className="hero-item hero-actions">
                    <button className="hero-button" id="hero-shop">Shop new arrivals</button>
                    <button className="hero-button" id="hero-story">Read our story</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;
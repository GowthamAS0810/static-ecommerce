import image from '../../assets/Home/story_section/image.png';
function Story(){
    return(
        <div className="story">
            <div className="story-image">
                <img src={image} alt="Our Story" />
            </div>
            <div className="story-content">
                <p style={{ color:'greenyellow' }}>our story</p>
                <h2>Built by runners.<br/>Worn on every terrain.</h2>
                <p style={{ color:'gray' }}>PACELINE opened in 2015 with one goal-to become an all-inclusive hub for runners. Twenty seasons in, we still hand-pick every shoe, every layer and every accessory in our range. From your first couck-to-5k to your third marathon, we prepare, empower and equip you with zero compromise on performance or style</p>
                <div className="story-stats">
                    <div><h2 style={{ color:'greenyellow' }}>10+</h2><p>Years in sport</p></div>
                    <div><h2 style={{ color:'greenyellow' }}>40+</h2><p>Brands stocked</p></div>
                    <div><h2 style={{ color:'greenyellow' }}>1</h2><p>store in glasgow</p></div>
                </div>
                <button>Read the full story</button>
            </div>

        </div>
    )
}
export default Story;
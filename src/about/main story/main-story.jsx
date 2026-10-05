import img from '../../assets/About/main_story_section/image_joggers.png';
function MainStory(){
    return(
        <div className="main-story">
            <div className="main-story-content">
                <p style={{ fontSize: '10px', color: 'gray' }}>Home / About</p>
                <h1 className="main-story-title">Our Story</h1>
                <p style={{ fontSize: '16px', color: 'rgb(55, 55, 55)' }}>we opened Paceline in 2015 with one goal- to build the running shop we'd always wanted. A decade in, we're still hand-picking every shoe, every layer and every accessory for runners just like us.</p>
                
            </div>
            <img className="main-story-image" src={img} alt="Paceline" />
        </div>
    )
}
export default MainStory;
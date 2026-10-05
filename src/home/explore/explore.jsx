import img1 from '../../assets/Home/explore_section/image_male.png';
import img2 from '../../assets/Home/explore_section/image_female.png';
function Explore(){
    return(
        <div className="explore">
            <div>
                <img src={img1} alt="Men's Running" />
                <div className="explore-overlay">
                    <h3>Men's Running</h3>
                    <p>pyjamas and running kit from race-day heros.</p>
                    <p>shop now</p>
                </div>
                
            </div>
            <div>
                <img src={img2} alt="Women's Running" />
                <div className="explore-overlay">
                    <h3>Women's Running</h3>
                    <p>20% off profits from go to girls run Glasgow.</p>
                    <p>shop now</p>
                </div>
            </div>
        </div>
    )
}
export default Explore;
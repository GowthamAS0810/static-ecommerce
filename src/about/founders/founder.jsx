import img1 from '../../assets/About/founders_section/image1.png'
import img2 from '../../assets/About/founders_section/image2.png'
function Founders(){
    return(
        <div className="founders">
            <p style={{color:'red'}}>05. meet the founders</p>
            <h2 style={{fontSize:'32px'}}>The people behind the shop</h2>
            <div className="founders-cards">
                <div className="founders-card">
                    <img src={img1} alt="" />
                    <div className="founders-content">
                        <h3>Rae Sinclair</h3>
                        <p>Founder & Head Buyer</p>
                        <p>A former GB triathelete turned shopkeeper. Rae hand-picks every shoe on the wall and still runs the Wednesday club-sub-3 marathoner, twelvw times over.</p>
                    </div>
                </div>
                <div className="founders-card">
                    <img src={img2} alt="" />
                    <div className="founders-content">
                        <h3>Jamie Roy</h3>
                        <p>Co-Founder & Coach</p>
                        <p>Sports physio and coach with two decades in the sport. Runs our free Saturday clinic, coaches the club, and knows more about your gait that you do.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Founders;
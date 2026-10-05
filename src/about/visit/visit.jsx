import img from '../../assets/About/visit_us_section/map.png'
function Visit(){
    return(
        <div className="visit">
            <div className="visit-content">
                <p>04. come say Hi</p>
                <h2 style={{fontSize:'34px'}}>Visit Us In</h2>
            </div>
            <img src={img} alt="" />
        </div>
    )
}
export default Visit;
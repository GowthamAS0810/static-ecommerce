function Banner(){
    return(
        <div className="banner">
            <p>Ready to Run?</p>
            <h1 style={{fontSize:'40px'}}>Come find your next pair of shoes.</h1>
            <div >
                <button className="banner-button" style={{backgroundColor:'black', color:'rgb(159, 233, 48)'}}>Shop Footwear</button>
                <button className="banner-button" style={{background:'transparent'}}>Book Gait Analysis</button>
            </div>
        </div>
    )
}
export default Banner;
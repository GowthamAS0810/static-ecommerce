function ArrivalCards({ image, brand, description, price }) {
    return (
        <div className="arrival-card">
            <img className="arrival-card-image" src={image} alt={`${brand} ${description}`} />
            <div className="arrival-card-details">
                <p style={{color:'gray'}}>{brand}</p>
                <h3>{description}</h3>
                <p className="arrival-card-price">{price}</p>
            </div>
        </div>
    )
}

export default ArrivalCards;
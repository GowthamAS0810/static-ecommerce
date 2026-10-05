function CategoryCards(props) {
    return (
        <div className="category-cards">
            <img src={props.image} alt="img" />
            <div className="category-card-overlay">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a style={{color:'greenyellow'}} href="">shop</a>
            </div>
        </div>

    )
}
export default CategoryCards;
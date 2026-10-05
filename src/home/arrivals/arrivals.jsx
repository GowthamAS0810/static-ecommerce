import image from '../../assets/Home/arrivals_section/image.png';
import ArrivalCards from './arrival-cards.jsx';
function Arrivals() {
    const cards = [
        { img:image, brand:'ON',  description:'cloudmonster 3-Hyper lily.', price:'$210'},
        { img:image, brand:'Nike', description:'Vaporfly 4-Volt Ice', price:'$240'},
        { img:image, brand:'Hoka', description:'Tecton X 4-Frost / Tangerine', price:'$220'},
        { img:image, brand:'Asics', description:'Megablast - White / Orange Glow', price:'$210'}
    ]
    const cardElements = cards.map((card) => (
        <li key={card.brand}>
            <ArrivalCards
                image={card.img}
                brand={card.brand}
                description={card.description}
                price={card.price}
            />
        </li>
    ));
    return(
        <div className="arrivals">
            <div className="category-title arrivals-title">
                <div>
                    <p style={{ color: "red" }}>02.Just landed</p>
                    <h2>New arrivals for the run.</h2>
                </div>
                    <div>
                    <button className="arrivals-option">New in</button>
                    <button className="arrivals-option">best sellers</button>
                    <button className="arrivals-option">Race Day</button>
                    <button className="arrivals-option">Trails</button>
                </div>
            </div>
            <ul className="category-list arrivals-list">{cardElements}</ul>
        </div>
    )
}
export default Arrivals;
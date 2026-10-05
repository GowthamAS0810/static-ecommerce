import CategoryCards from "./catergory-cards";
import image1 from '../../assets/Home/category_section/image1.png';
import image2 from '../../assets/Home/category_section/image2.png';
import image3 from '../../assets/Home/category_section/image3.png';
import image4 from '../../assets/Home/category_section/image4.png';
function Category() {
    const cards = [
        { img:image1, title:'Road Running', description:'Speed, Cushion, race-day.'},
        { img:image2, title:'Trail Running', description:'Grip, Cushion, Protection.'},
        { img:image3, title:'Apparel', description:'Layers built for every mile.'},
        { img:image4, title:'Accessories', description:'Watches, packs, fuel.'}
    ]
    const cardElements = cards.map((card) => (
        <li>
            <CategoryCards
            image={card.img}
            title={card.title}
            description={card.description}/>
        </li>
        
    ));
    return(
        <div className="category">
            <div className="category-title">
                <div>
                    <p style={{ color: "red" }}>01.shop by category</p>
                    <h2>Every discipline. Every distance.</h2>
                </div>
                <p>view collections</p>
            </div>
            <ul className="category-list">{cardElements}</ul>
        </div>
    )
}
export default Category;
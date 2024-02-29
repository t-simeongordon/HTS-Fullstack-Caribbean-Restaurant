import { MenuData } from "../../../../../model/menu/MenuList"
import "./Card.css"
const Card =({ name, img, description, inStock, price, starRating, kcal }:MenuData)=>{
    return(
        <div className="card">
            <img src={img} alt="content of the food" className="card-img"/>
            <h2 className="card-title">{name}</h2>
            <div className="card-description">
                <p>{inStock}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <div>
                <p>{starRating}</p>
            </div>
            <div>
                <p>{kcal}</p>
            </div>
        </div>
    )
}

export default Card
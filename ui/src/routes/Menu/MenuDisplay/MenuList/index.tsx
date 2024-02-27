import { MenuItems } from "../../../../model/menu/MenuList"
import "./MenuList.css"
const MenuList =({ menuItems }: MenuItems)=>{
    return(
        <ul className="cards">
            {menuItems.map((item) => (

          <li className="cards__item" key={item.id}>
      
            <div className="card">   
            IMG   
                <div className="card__content">
                    <div className="card__title">{item.name}</div>
                    
                </div>
            </div>
          </li>
          // Customize based on your data structure
        ))}
        </ul>
    )
}

export default MenuList
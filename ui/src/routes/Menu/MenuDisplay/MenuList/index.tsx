import { MenuItem, MenuItems } from "../../../../model/menu/MenuList"
import Card from "./Card"
import "./MenuList.css"
const MenuList =({ menuItems }: MenuItems)=>{

    // return <>{menuItems.map(({ id, img, name, inStock, price, description, starRating, kcal, allergens }:MenuItem)=>{
    //         <Card
    //             key={id}
    //             img={img} 
    //             name={name} 
    //             inStock={inStock} 
    //             price={price} 
    //             description={description} 
    //             starRating={starRating} 
    //             kcal={kcal} 
    //             allergens={allergens}      
    //        />
    //     })}
    //     </>
    return (
        <>
        <div id="card-container">
      {menuItems.map(({ id, img, name, inStock, price, description, starRating, kcal, allergens }:MenuItem) => (
            <Card
            key={id}
            img={img} 
            name={name} 
            inStock={inStock} 
            price={price} 
            description={description} 
            starRating={starRating} 
            kcal={kcal} 
            allergens={allergens}      
       />
      ))}
    </div>
        </>
    )
}

export default MenuList
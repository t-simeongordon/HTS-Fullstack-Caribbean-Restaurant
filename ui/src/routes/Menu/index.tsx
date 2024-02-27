import MenuDisplay from "./MenuDisplay"
import SideBar from './SideBar'
import "./Menu.css"
const Menu =()=> {
    return(
        <div className="menu-container">
            <SideBar />
            <MenuDisplay itemsPerPage={3}/>
        </div>
    )
}

export default Menu
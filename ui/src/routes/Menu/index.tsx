import MenuDisplay from "./MenuDisplay"
import SideBar from './SideBar'
import "./Menu.css"
const Menu =()=> {
    return(
        <div className="menu-container">
            <SideBar />
            <MenuDisplay itemsPerPage={6}/>
        </div>
    )
}

export default Menu
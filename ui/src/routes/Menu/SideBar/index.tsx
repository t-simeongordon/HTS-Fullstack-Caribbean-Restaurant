import Price from "./Price"
import "./sidebar.css"

const SideBar = ({handleChange}: any) =>{

    return (
        <>
        <section className="sidebar-conatainer">
            <div className="sidebar">
                <Price handleChange={handleChange} />
            </div>
        </section>
      </>
    )
}

export default SideBar
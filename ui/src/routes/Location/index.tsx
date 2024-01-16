import { Route, Routes } from "react-router-dom"

const Location =()=> {
    return(
        <Routes>
            <Route index element={<>Location</>}/>
            <Route path="london" element={<>london</>}/>
        </Routes>
    )
}

export default Location
import { Route, Routes } from "react-router-dom"

const Location =()=> {
    return(
        <Routes>
            <Route index element={<>Location</>}/>
            <Route path="london" element={<>london</>}/>
            <Route path="manchester" element={<>manchester</>}/>
        </Routes>
    )
}

export default Location
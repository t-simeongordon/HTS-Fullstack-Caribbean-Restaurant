import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App";
import Home from './Home';
import Menu from './Menu';
import Location from './Location'; 
import FAQ from './FAQ'; 

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/location/*" element={<Location />} />
            <Route path="/faq" element={<FAQ />} />
        </Route>
    )
)

export default router;
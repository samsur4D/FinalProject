import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Common/Footer";
import Headroom from "react-headroom";
import Navber from "../Pages/Common/Navber";


const Main = () => {
const location = useLocation();

const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')

    return (
        <div>
            <Headroom>
            {noHeaderFooter || <Navber></Navber>}
            </Headroom>


            <div className="min-h-[calc(100vh-400px)]">
            <Outlet></Outlet>
            </div>

                            
             { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
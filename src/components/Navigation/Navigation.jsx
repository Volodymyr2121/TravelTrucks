import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/catalog"}>catalog</NavLink>
            </nav>
      </div>  
    );
};

export default Navigation;
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"


const Navigation = () => {
    return (
        <div className={css.container}>
            <nav className={css.navigationList}>
                <NavLink className={({ isActive }) =>
            isActive ? `${css.navigationItem} ${css.active}` : css.navigationItem}
                    to={"/"}>Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? `${css.navigationItem} ${css.active}` : css.navigationItem}
                    to={"/catalog"}>Catalog</NavLink>
            </nav>
      </div>  
    );
};

export default Navigation;
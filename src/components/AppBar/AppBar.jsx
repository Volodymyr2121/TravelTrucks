import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css"
import sprite from "../../../assets/icons/sprite-icon.svg"
import { Link } from "react-router-dom";

const AppBar = () => {
    return (
        <header>
         <div className={css.container}>    
                <Link to="/" className={css.logo}>
                    <svg width={136} height={16}>
                        <use href={`${sprite}#icon-TravelTrucks`}></use>
                    </svg>
          </Link>
          <Navigation />
         </div>
      </header>  
    );
};

export default AppBar;
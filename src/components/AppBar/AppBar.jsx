import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css"

const AppBar = () => {
    return (
        <header>
         <div className={css.container}>
          <div className={css.logo}>Logo</div>
          <Navigation />
         </div>
      </header>  
    );
};

export default AppBar;
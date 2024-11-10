import { Link } from "react-router-dom";
import css from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
              <h1 className={css.title}>Campers of your dreams</h1>
              <p className={css.text}>You can find everything you want in our catalog</p>
          <Link to="/catalog">
            <button style={{width: "173px"}} className="btn-red">View Now</button>
          </Link>
            </div>
    </div>
    )
};

export default HomePage;
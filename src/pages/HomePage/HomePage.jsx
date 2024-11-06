import css from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
              <h1 className={css.title}>Campers of your dreams</h1>
              <p className={css.text}>You can find everything you want in our catalog</p>
              <button className="btn-red">View Now</button>
            </div>
    </div>
    )
};

export default HomePage;
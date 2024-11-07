import { useFormik } from "formik";
import sprite from "../../../assets/icons/symbol-defs.svg"
import css from "./Location.module.css"

const Location = () => {
     const formik = useFormik({
        initialValues: {
            location: "",
        },
        onSubmit: (values) => {
            console.log("Location submitted:", values.location);
        },
    });

    return (
        <div className={css.locationWrapper}>
            <label htmlFor="location" className={css.label}>
                Location
            </label>
            <form onSubmit={formik.handleSubmit}>
                <div className={css.locationBox}>
                    <svg className={css.icon} width={20} height={20}>
                        <use href={`${sprite}#icon-location`} />
                    </svg>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Enter a city"
                        className={css.locationInput}
                        value={formik.values.location}
                        onChange={formik.handleChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default Location;
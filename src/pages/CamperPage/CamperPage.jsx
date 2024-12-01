import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/Campers/operations";
import css from "./CamperPage.module.css";
import sprite from "../../../assets/icons/sprite-icon.svg";
import { clearSelectedCamper } from "../../redux/Campers/slice";
import UserForm from "../../components/Form/UserForm";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper, isLoading, error } = useSelector((state) => state.campers);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("features", { replace: true });
  }, [navigate, id]);

  useEffect(() => {
    dispatch(fetchCamperById(id));
    return () => dispatch(clearSelectedCamper());
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedCamper) return null;

  const {
    name,
    price,
    rating,
    location,
    gallery,
    description,
    reviews,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = selectedCamper;

  const features = [
    { name: transmission, icon: "icon-transmission", value: transmission },
    { name: engine, icon: "icon-engine", value: engine },
    { name: "AC", icon: "icon-AC", value: AC },
    { name: "Bathroom", icon: "icon-Bathroom", value: bathroom },
    { name: "Kitchen", icon: "icon-Kitchen", value: kitchen },
    { name: "TV", icon: "icon-TV", value: TV },
    { name: "Radio", icon: "icon-radio", value: radio },
    { name: "Refrigerator", icon: "icon-refrigerator", value: refrigerator },
    { name: "Microwave", icon: "icon-Microwave", value: microwave },
    { name: "Gas", icon: "icon-gas", value: gas },
    { name: "Water", icon: "icon-water", value: water } 
  ];

  const vehicleDetail = [
    { name: "Form", value: selectedCamper.form },
    { name: "Length", value: selectedCamper.length },
    { name: "Width", value: selectedCamper.width },
    { name: "Height", value: selectedCamper.height },
    { name: "Tank", value: selectedCamper.tank },
    { name: "Consumption", value: selectedCamper.consumption },
  ];

  function reverseLocation(str) {
    const [country, city] = str.split(',').map(part => part.trim());
    return `${city}, ${country}`;
  }

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h3 className={css.name}>{name}</h3>

        <div className={css.ratingBlock}>
          <div className={css.rating}>
            <svg className={css.iconRating} width={16} height={16}>
              <use href={`${sprite}#icon-rating`} />
            </svg>
            <p className={css.ratingText}>{rating} ({reviews.length} Reviews)</p>
          </div>
          <div className={css.location}>
            <svg className={css.icon} width={16} height={16}>
              <use href={`${sprite}#icon-location`} />
            </svg>
            <p className={css.locationText}>{reverseLocation(location)}</p>
          </div>
        </div>
        <p className={css.price}>€{price.toFixed(2)}</p>
      </div>

      <div className={css.imageWrapper}>
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={`${name} image ${index + 1}`}
            className={css.image}
          />
        ))}
      </div>

      <p className={css.description}>{description}</p>

      <div className={css.reviewsContent}>
        <div className={css.camperInfo}>
          <nav className={css.infoWrapper}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navigationItem} ${css.active}` : css.navigationItem
              }
              to="features"
            >
              Features
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navigationItem} ${css.active}` : css.navigationItem
              }
              to="reviews"
            >
              Reviews
            </NavLink>
          </nav>
          <Outlet context={{ features, reviews, vehicleDetail }} />
        </div>
        <div className={css.formWrapper}>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default CamperPage;

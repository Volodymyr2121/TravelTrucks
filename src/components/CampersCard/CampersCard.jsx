import { vehicleEquipmentFilters } from "../../constants/constants";
import css from "./CampersCard.module.css";
import sprite from '../../../assets/icons/symbol-defs.svg'

const CampersCard = ({ camper }) => {
  const {
    name,
    price,
    rating,
    location,
    gallery,
  } = camper;

  // Визначаємо фільтри для конкретного кемпера
  const camperFeatures = vehicleEquipmentFilters
    .filter((filter) => {
      // Відбираємо тільки ті фільтри, які є в об'єкті camper
      return camper[filter.label.toLowerCase()] !== undefined ? camper[filter.label.toLowerCase()] : false;
    })
    .map((filter) => ({
      icon: filter.icon,
      label: filter.label,
    }));

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={gallery[0].thumb} alt={name} className={css.image} />
      </div>
      <div className={css.content}>
        <div className={css.header}>
          <h3 className={css.name}>{name}</h3>
          <div className={css.price}>€{price.toFixed(2)}</div>
        </div>

        <div className={css.rating}>
          <svg className={css.icon} width={16} height={16}>
            <use href={`${sprite}#icon-rating`} />
          </svg>
          <span>{rating} Reviews</span>
        </div>

        <div className={css.location}>
          <svg className={css.icon} width={16} height={16}>
            <use href={`${sprite}#icon-location`} />
          </svg>
          <span>{location}</span>
        </div>

        <p className={css.description}>
          The pictures shown here are example vehicles of the respective...
        </p>

        {/* Динамічно відображаємо особливості кемпера */}
        <div className={css.features}>
          {camperFeatures.map((feature, index) => (
            <div className={css.feature} key={index}>
              <svg className={css.icon} width={24} height={24}>
                {feature.icon}
              </svg>
              {feature.label}
            </div>
          ))}
        </div>

        <button className={css.button}>Show more</button>
      </div>
    </div>
  );
};

export default CampersCard;
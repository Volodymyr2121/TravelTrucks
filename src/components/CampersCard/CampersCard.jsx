  import { vehicleEquipmentFilters } from "../../constants/constants";
  import css from "./CampersCard.module.css";
import sprite from '../../../assets/icons/sprite-icon.svg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

  const CampersCard = ({ camper }) => {
    const {
      id,
      name,
      price,
      rating,
      location,
      gallery,
      reviews,
      description,
    } = camper;

    const [isFavorite, setIsFavorite] = useState(false);
    
     useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(id)) {
      setIsFavorite(true);
    }
     }, [id]);
    
    const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(favId => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };


    const camperFeatures = vehicleEquipmentFilters
    .filter((filter) => camper[filter.label.toLowerCase()] !== undefined ? camper[filter.label.toLowerCase()] : false)
    .map((filter) => ({
      icon: filter.icon,
      label: filter.label,
    }))
    .concat(
      camper.transmission
        ? [{ icon: <svg width={20} height={20}><use href={`${sprite}#icon-transmission`} /></svg>, label: camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1) }]
        : [],
      camper.engine
        ? [{ icon: <svg width={20} height={20}><use href={`${sprite}#icon-engine`} /></svg>, label: camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1) }]
        : []
    );

    function reverseLocation(str) {
  const [country, city] = str.split(',').map(part => part.trim());
  return `${city}, ${country}`;
}

    return (
      <div className={css.conteiner}>
        <div className={css.imageWrapper}>
          <img src={gallery[0].thumb} alt={name} className={css.image} />
        </div>
        <div className={css.content}>
          <div className={css.header}>
            <h3 className={css.name}>{name}</h3>
            <div className={css.favoritedBlock}>
            <p className={css.price}>€{price.toFixed(2)}</p>
            <svg
            className={`${css.favoriteIcon} ${isFavorite ? css.favorited : ''}`}
            width={24}
            height={24}
            onClick={handleFavoriteToggle}
          >
            <use href={`${sprite}#icon-like`} />
              </svg>
              </div>
          </div>

          <div className={css.ratingBlock}>
            <div className={css.rating}>
            <svg className={css.iconRating} width={16} height={16}>
              <use href={`${sprite}#icon-rating`} />
            </svg>
            <p className={css.ratingText}>{rating}({reviews.length} Reviews)</p>
          </div>

          <div className={css.location}>
            <svg className={css.icon} width={16} height={16}>
              <use href={`${sprite}#icon-location`} />
            </svg>
            <p className={css.locationText}>{reverseLocation(location)}</p>
            </div>
            </div>

          
          <p className={css.description}>
            {description}
          </p>

          <div className={css.features}>
    {camperFeatures.map((feature, index) => (
      <div className={css.feature} key={index}>
        <svg className={css.iconWrapper} width={20} height={20}>
          {feature.icon}  
        </svg>
        {feature.label}
      </div>
    ))}
  </div>
<Link to={`/catalog/${camper.id}`}>
            <button style={{ width: "166px" }} className='btn-red'>Show more</button>
            </Link>
        </div>
      </div>
    );
  };

  export default CampersCard;
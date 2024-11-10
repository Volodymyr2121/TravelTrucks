import { useOutletContext } from "react-router-dom";
import css from "./Reviews.module.css";
import sprite from "../../../assets/icons/sprite-icon.svg"

const Reviews = () => {
   const { reviews } = useOutletContext();

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <>
      {reviews.map((review, index) => {
        const avatarLetter = review.reviewer_name
          ? review.reviewer_name.charAt(0).toUpperCase()
          : "";
        const rating = review.reviewer_rating;
        const stars = Array.from({ length: 5 }, (_, idx) => idx < rating);

        return (
          <div key={index} className={css.container}>
            <div className={css.header}>
              <div className={css.avatar}>{avatarLetter}</div>

              <div className={css.info}>
                <span className={css.name}>{review.reviewer_name}</span>
                <div className={css.rating}>
                  {stars.map((filled, idx) => (
                    <svg
                      key={idx}
                      className={`${css.icon} ${filled ? css.filled : ""}`}
                      width="16"
                      height="16"
                    >
                      <use href={`${sprite}#icon-rating`}></use>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </div>
        );
      })}
    </>
  );
};

export default Reviews;
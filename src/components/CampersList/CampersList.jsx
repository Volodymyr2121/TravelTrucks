import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/Campers/operations";
import CampersCard from "../CampersCard/CampersCard";
import css from "./CampersList.module.css";
import { useEffect, useState } from "react";
import { selectCampers } from "../../redux/Campers/selectors";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    dispatch(fetchCampers({ vehicleType: "", filters: {} })); 
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampers({ vehicleType: "", filters: campers.filters }));
  }, [dispatch, campers.filters]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <ul className={css.campersList}>
      {campers.slice(0, visibleCount).map((camper) => (
        <li key={camper.id}>
          <CampersCard camper={camper} />
        </li>
      ))}

      {visibleCount < campers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </ul>
  );
};
export default CampersList;
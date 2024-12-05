import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/Campers/operations";
import CampersCard from "../CampersCard/CampersCard";
import css from "./CampersList.module.css";
import { useEffect, useState } from "react";
import { selectCampers,selectError, isLoading, } from "../../redux/Campers/selectors";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const Loading = useSelector(isLoading);
  const Error = useSelector(selectError);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    dispatch(fetchCampers({ vehicleType: "", filters: {} })); 
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampers({ vehicleType: "", filters: campers.filters }));
  }, [dispatch, campers.filters]);

  if (Loading) {
    return <div>Loading...</div>;
  }

  if (Error) {
    return <div>Error: {Error}</div>;
  }

  if (!Loading && campers.length === 0) {
    return <div>No campers found for the given criteria.</div>; // Повідомлення про відсутність результатів
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
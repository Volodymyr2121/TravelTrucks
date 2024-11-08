import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/Campers/operations";
import CampersCard from "../CampersCard/CampersCard";
import css from "./CampersList.module.css";
import { useEffect } from "react";
import { selectCampers } from "../../redux/Campers/selectors";


const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css.campersList}>
      {campers.map((camper) => (
        <CampersCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};
export default CampersList;
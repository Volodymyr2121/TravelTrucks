import { useOutletContext } from "react-router-dom";
import css from "./Features.module.css";
import sprite from "../../../assets/icons/sprite-icon.svg";

const Features = () => {
  const { features, vehicleDetail } = useOutletContext();

  return (
    <div className={css.container}>
      <div className={css.features}>
        <ul className={css.list}>
          {features && features.length > 0 ? (
            features.map((feature, index) =>
              feature.value ? (
                <li key={index} className={css.item}>
                  <svg className={css.icon} width={20} height={20} style={["Microwave", "Gas", "Water"].includes(feature.name) ? { stroke: "#101828", fill: "transparent" } : {}}>
                    <use href={`${sprite}#${feature.icon}`} />
                  </svg>
                  {feature.name}
                </li>
              ) : null
            )
          ) : (
            <p>No features available.</p>
          )}
        </ul>
      </div>
      <div>
        <h3 className={css.title}>Vehicle details</h3>
        <ul className={css.listText}>
          {vehicleDetail && vehicleDetail.length > 0 ? (
            vehicleDetail.map((vehicle, index) =>
              vehicle.value ? (
                <li key={index} className={css.itemText}>
                  <span>{vehicle.name}</span> <span>{vehicle.value}</span>
                </li>
              ) : null
            )
          ) : (
            <p>No features available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Features;
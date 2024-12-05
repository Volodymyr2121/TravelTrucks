  import { useState } from "react";
  import css from "./SearchBox.module.css"
  import FilterList from "../FilterList/FilterList";
  import Location from "../Location/Location";
  import sprite from "../../../assets/icons/sprite-icon.svg"
import { vehicleEquipmentFilters } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/Campers/operations";


  const SearchBox = () => {
    const [selectedEquipmentFilters, setSelectedEquipmentFilters] = useState([]);
    const [location, setLocation] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const dispatch = useDispatch();

    const handleFilterSelect = (filterLabel) => {
    setSelectedEquipmentFilters((prev) =>
      prev.includes(filterLabel)
        ? prev.filter((f) => f !== filterLabel)
        : [...prev, filterLabel]
    );
  };

    const handleVehicleTypeSelect = (type) => {
    setVehicleType((prevType) => (prevType === type ? "" : type));
  };
    
    const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    };
    
     const handleSubmit = () => {
    const noLowercaseFilters = ["AC", "TV"];

    const filters = vehicleEquipmentFilters.reduce((acc, filter) => {
      if (selectedEquipmentFilters.includes(filter.label)) {
        const key = noLowercaseFilters.includes(filter.label) ? filter.label : filter.label.toLowerCase();
        acc[key] = true;
      }
      return acc;
    }, {});
       
       const vehicleTypeMapping = {
      Van: "panelTruck",
      "Fully Integrated": "fullyIntegrated",
      Alcove: "alcove",
    };

    const mappedVehicleType = vehicleTypeMapping[vehicleType] || vehicleType;

    dispatch(fetchCampers({ vehicleType: mappedVehicleType, filters, location }));
  };

    const vehicleTypeFilters = [
      { label: "Van", icon: <svg width={32} height={32}>
          <use href={`${sprite}#icon-Van`} />
  </svg>},
      { label: "Fully Integrated", icon: <svg width={32} height={32}>
          <use href={`${sprite}#icon-Integrated`} />
  </svg>},
      { label: "Alcove", icon: <svg width={32} height={32}>
          <use href={`${sprite}#icon-Alcove`} />
  </svg>},
    ];
      
      return (
          <div className={css.container}>
              <Location onLocationChange={handleLocationChange}/>
              <div>
                  <h2 className={css.title}>Filters</h2>
        <FilterList
          title="Vehicle equipment"
          filters={vehicleEquipmentFilters}
          selectedFilters={selectedEquipmentFilters}
          onFilterSelect={handleFilterSelect}
        />
        <FilterList 
          title="Vehicle type" 
          filters={vehicleTypeFilters} 
          selectedFilters={[vehicleType]}
          onFilterSelect={handleVehicleTypeSelect} 
        />
      <button onClick={handleSubmit} style={{ width: "166px" }} className="btn-red">Search</button>
              </div>
          </div>
      )
  };

  export default SearchBox;
  import { useState } from "react";
  import css from "./SearchBox.module.css"
  import FilterList from "../FilterList/FilterList";
  import Location from "../Location/Location";
  import sprite from "../../../assets/icons/sprite-icon.svg"
import { vehicleEquipmentFilters } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/Campers/operations";


  const SearchBox = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [location, setLocation] = useState("");
    const [vehicleType, setVehicleType] = useState("");
  const dispatch = useDispatch();

    const handleFilterSelect = (filterLabel) => {
      setSelectedFilters((prev) =>
        prev.includes(filterLabel)
          ? prev.filter((f) => f !== filterLabel)
          : [...prev, filterLabel]
      );
    };

    const handleVehicleTypeSelect = (type) => {
    setVehicleType(type);
    };
    
    const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    };
    
    const handleSubmit = () => {const filters = {
      kitchen: selectedFilters.includes("kitchen"),
      AC: selectedFilters.includes("AC"),
      bathroom: selectedFilters.includes("bathroom"),
      TV: selectedFilters.includes("TV"),
      radio: selectedFilters.includes("radio"),
      refrigerator: selectedFilters.includes("refrigerator"),
      microwave: selectedFilters.includes("microwave"),
      gas: selectedFilters.includes("gas"),
      water: selectedFilters.includes("water"),
    };

     
    dispatch(fetchCampers({vehicleType, filters }));
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
          selectedFilters={selectedFilters}
          onFilterSelect={handleFilterSelect} 
        />
        <FilterList 
          title="Vehicle type" 
          filters={vehicleTypeFilters} 
          selectedFilters={selectedFilters}
          onFilterSelect={handleFilterSelect} 
        />
      <button onClick={handleSubmit} style={{ width: "166px" }} className="btn-red">Search</button>
              </div>
          </div>
      )
  };

  export default SearchBox;
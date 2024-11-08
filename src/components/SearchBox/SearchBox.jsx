  import { useState } from "react";
  import css from "./SearchBox.module.css"
  import FilterList from "../FilterList/FilterList";
  import Location from "../Location/Location";
  import sprite from "../../../assets/icons/symbol-defs.svg"
import { vehicleEquipmentFilters } from "../../constants/constants";


  const SearchBox = () => {
      const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterSelect = (filterLabel) => {
      setSelectedFilters((prev) =>
        prev.includes(filterLabel)
          ? prev.filter((f) => f !== filterLabel)
          : [...prev, filterLabel]
      );
    };


  //   const vehicleEquipmentFilters = [
  //       {
  //           label: "AC",
  //           icon: <svg width={32} height={32}>
  //         <use href={`${sprite}#icon-ac`} />
  // </svg>},
  //     { label: "Automatic", icon: <svg width={32} height={32}>
  //         <use href={`${sprite}#icon-Automat`} />
  // </svg>},
  //     { label: "Kitchen", icon: <svg width={32} height={32}>
  //         <use href={`${sprite}#icon-Kitchen`} />
  //       </svg>},
  //     {
  //           label: "TV",
  //           icon: <svg width={32} height={32}>
  //         <use href={`${sprite}#icon-TV`} />
  //           </svg>},
  //     {
  //           label: "Bathroom",
  //           icon: <svg width={32} height={32}>
  //         <use href={`${sprite}#icon-Bathroom`} />
  //       </svg>
  //     },
  //     {
  //           label: "Radio",
  //           icon: <svg width={32} height={32}>
  //         <use href={`${sprite}#icon-radio`} />
  //       </svg>
  //     },
  //     {
  //           label: "Refrigerator",
  //           icon: <svg width={32} height={32}>
  //         <use href={`${sprite}#icon-refrigerator`} />
  //       </svg>
  //     },
  //     {
  //           label: "Microwave",
  //           icon: <svg style={{stroke: "#101828", fill: "transparent"}} width={32} height={32}>
  //         <use href={`${sprite}#icon-Microwave`} />
  //       </svg>
  //     },
  //     {
  //           label: "Gas",
  //           icon: <svg style={{stroke: "#101828", fill: "transparent"}} width={32} height={32}>
  //         <use href={`${sprite}#icon-gas`} />
  //       </svg>
  //     },
  //     {
  //           label: "Water",
  //           icon: <svg style={{stroke: "#101828", fill: "transparent"}} width={32} height={32}>
  //         <use href={`${sprite}#icon-water`} />
  // </svg>},
  //   ];

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
              <Location />
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
      <button style={{ width: "166px" }} className="btn-red">Search</button>
              </div>
          </div>
      )
  };

  export default SearchBox;
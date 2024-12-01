import sprite from "../../assets/icons/sprite-icon.svg";

export const vehicleEquipmentFilters = [
        {
            label: "AC",
            icon: <use href={`${sprite}#icon-AC`} />},
      { label: "Kitchen", icon: 
          <use href={`${sprite}#icon-Kitchen`} />
},
      {
            label: "TV",
            icon:<use href={`${sprite}#icon-TV`} />},
      {
            label: "Bathroom",
            icon: <use href={`${sprite}#icon-Bathroom`} />},
      {
            label: "Radio",
            icon: <use href={`${sprite}#icon-radio`} />},
      {
            label: "Refrigerator",
            icon: <use href={`${sprite}#icon-refrigerator`} />
      },
      {
            label: "Microwave",
            icon: <svg style={{stroke: "#101828", fill: "transparent"}}>
          <use href={`${sprite}#icon-Microwave`} />
        </svg>
      },
      {
            label: "Gas",
            icon: <svg style={{stroke: "#101828", fill: "transparent"}} >
          <use href={`${sprite}#icon-gas`} />
        </svg>
      },
      {
            label: "Water",
            icon: <svg style={{stroke: "#101828", fill: "transparent"}} >
          <use href={`${sprite}#icon-water`} />
  </svg>},
    ];

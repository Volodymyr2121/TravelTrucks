import FilterButton from "../FilterButton/FilterButton";
import css from "./FilterList.module.css"


const FilterList = ({ title, filters, onFilterSelect, selectedFilters }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.list}>
        {filters.map((filter) => (
          <FilterButton 
            key={filter.label}
            label={filter.label} 
            icon={filter.icon} 
            isActive={selectedFilters.includes(filter.label)} 
            onClick={() => onFilterSelect(filter.label)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
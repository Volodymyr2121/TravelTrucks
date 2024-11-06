import FilterButton from "../FilterButton/FilterButton";


const FilterList = ({ title, filters, onFilterSelect }) => {
    return <div className="filter-block">
      <h3>{title}</h3>
      <div className="filter-options">
        {filters.map((filter) => (
          <FilterButton 
            key={filter.label}
            label={filter.label} 
            icon={filter.icon} 
            isActive={filter.isActive} 
            onClick={() => onFilterSelect(filter.label)} 
          />
        ))}
      </div>
    </div>
};

export default FilterList;
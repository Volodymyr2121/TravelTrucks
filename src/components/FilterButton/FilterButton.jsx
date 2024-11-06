

const FilterButton = ({ label, isActive, onClick, icon }) => {
    return (
        <button 
      className={isActive ? "active" : ""} 
      onClick={onClick}>
      {icon} 
      {label}
    </button>
    )
};

export default FilterButton;
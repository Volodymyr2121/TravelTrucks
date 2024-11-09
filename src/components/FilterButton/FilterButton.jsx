import css from "./FilterButton.module.css"

const FilterButton = ({ label, isActive, onClick, icon }) => {
    return (
        <button 
      className={isActive ? css.buttonActiv : css.button} 
      onClick={onClick}><span className={css.wrapper}>
      <svg width={32} height={32}>{icon}</svg>
          {label}
          </span>
    </button>
    )
};

export default FilterButton;
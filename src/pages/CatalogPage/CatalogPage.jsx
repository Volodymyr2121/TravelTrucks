import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./CatalogPage.module.css"


const CatalogPage = () => {
    return (
        <div className={css.container}>
            <SearchBox />
            <CampersList/>
        </div>
    )
};
export default CatalogPage;
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./Loading/Loading";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"))

const App = () => {
    return (
        <Layout>
        <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/catalog/:id" element={<CatalogPage />} /> */}
        </Routes>  
        </Suspense>
        </Layout>
    );
}

export default App;
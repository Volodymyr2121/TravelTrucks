import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Loading/Loading";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"))
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"))
const Features = lazy(() => import("../Features/Features"))
const Reviews = lazy(() => import("../Reviews/Reviews"))

const App = () => {
    return (
        <Layout>
        <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />} >
                    <Route path="features" element={<Features/>} />
                    <Route path="reviews" element={<Reviews/>} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>  
        </Suspense>
        </Layout>
    );
    }

export default App;
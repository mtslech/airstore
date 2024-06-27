import { useContext } from "react";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";

const HomePage = () => {
    const context = useContext(myContext);
    const name = context
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
        </Layout>
    );
}

export default HomePage;
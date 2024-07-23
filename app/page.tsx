import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Product from "./components/Product";
import Icons from "./components/Icons";
import Review from "./components/Review";

export default function Home() {
  return (
    <div>
      <Header/>
      <HomeSection/>
      <About/>
      <Icons/>
      <Product/>
      <Review/>
      <Footer/>
    </div>
  );
}

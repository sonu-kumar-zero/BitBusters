import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AppointMentBox from "./components/homePage/AppointMentBox";
import Article from "./components/homePage/Article";
import Carousal from "./components/homePage/Carousal";
import CarousalInput from "./components/homePage/CarousalInput";
import SpecialistHorizontalBar from "./components/homePage/SpecialistHorizontalBar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Carousal />
        <CarousalInput />
        <SpecialistHorizontalBar />
        <AppointMentBox />
        <Article />
        <Footer />
      </div>
    </>
  );
}

export default App;

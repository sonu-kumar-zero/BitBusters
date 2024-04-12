import Navbar from "./components/common/Navbar";
import Carousal from "./components/homePage/Carousal";
import SpecialistHorizontalBar from "./components/homePage/SpecialistHorizontalBar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Carousal />
        <SpecialistHorizontalBar />
      </div>
      <div className="h-20"></div>
    </>
  );
}

export default App;

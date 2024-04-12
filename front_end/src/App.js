import Navbar from "./components/common/Navbar";
import Carousal from "./components/homePage/Carousal";

function App() {
  return (
    <>
      <div className="">
        {/* <div className="bg-red-100">Home Page</div> */}
        <Navbar />
        <Carousal />
      </div>
      <div className=""></div>
    </>
  );
}

export default App;

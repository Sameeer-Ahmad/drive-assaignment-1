import { BrowserRouter } from "react-router-dom";
import Card from "./components/card";
import InfiniteScroll from "./components/infiniteScroll";
import Navbar from "./pages/navbar";
import SignupForm from "./pages/signupForm";
import AllRoutes from "./Routes/allRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Navbar />
        <AllRoutes />
      </BrowserRouter>

      {/* <SignupForm/> */}
    </>
  );
}

export default App;

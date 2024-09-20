import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/navbar";
import AllRoutes from "./Routes/allRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

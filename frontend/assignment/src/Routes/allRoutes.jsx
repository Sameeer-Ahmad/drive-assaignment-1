
import { Routes, Route } from "react-router-dom";
import InfiniteScroll from "../components/infiniteScroll";
import SignupForm from "../pages/signupForm";
import Card from "../components/card";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={  <InfiniteScroll renderData={data => <Card items={data} />} /> } />
      <Route path="/signup" element={<SignupForm />} />  
    </Routes>
  );
}

export default AllRoutes;


import { Routes, Route } from "react-router-dom";
import InfiniteScroll from "../components/infiniteScroll";
import SignupForm from "../pages/signupForm";
import Card from "../components/card";
import Counter from "../components/react memo/counter";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={  <InfiniteScroll renderData={data => <Card items={data} />} /> } />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/react-memo" element={<Counter />} />
      
    </Routes>
  );
}

export default AllRoutes;

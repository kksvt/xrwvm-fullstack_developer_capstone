import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"
import Dealers from './components/Dealers/Dealers'
import Dealer from './components/Dealers/Dealer'
import PostReview from "./components/Dealers/PostReview"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path='/dealers' element={<Dealers></Dealers>}></Route>
      <Route path='/dealer/:id' element={<Dealer></Dealer>}></Route>
      <Route path='/postreview/:id' element={<PostReview></PostReview>}></Route>
    </Routes>
  );
}
export default App;

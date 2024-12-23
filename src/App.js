import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { Home } from "./components/Pages/Home";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Footer />
  </>
  );
}

export default App;

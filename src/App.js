import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Navbar from "./components/common/Navbar";
import Gallery from "./components/gallery/Gallery";
import Destination from "./components/Destination/Home";
import SinglePages from "./SinglePage/SinglePages";
import Blogs from "./components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:id" element={<SinglePages />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

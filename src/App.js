import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Navbar from "./components/common/Navbar";
import Gallery from "./components/gallery/Gallery";
import Destination from "./components/Destination/Home";
import SinglePages from "./SinglePage/SinglePages";
import Blogs from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Download from './components/HomeSection/Download/Download'
import Footer from './components/Footer/Footer'
import Login from './components/login/Login'

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
        <Route path="/blogsingle/:id" element={<BlogSingle />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

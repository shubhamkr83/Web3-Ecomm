// Components
import MainHeader from './components/MainHeader';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />} >
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
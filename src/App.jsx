import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Transform from "./Components/Transform";
import WhatsAppButton from "./Components/WhatsAppButton";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MainContent />
              <Products />
              <Clients />
              <Transform />
            </>
          }
        />

        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </Router>
  );
}
export default App;

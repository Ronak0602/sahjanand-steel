import { Link } from "react-router-dom";
const Hero = () => {
  const heroBackground = "/assets/images/hero-background-BPUkjrRL.jpg";
  const heroStyle = {
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <section style={heroStyle} className="hero-section">
      <div className="container">
        <div className="hero-content text-center">
          <span className="hero-subtitle">Premium Steel's Custom</span>
          <span className="hero-subtitle">Furniture</span>
          <h1 className="hero-title">Crafted with Excellence</h1>
          <p className="hero-text">
            Transform your space with our expertly crafted steel furniture,
            modular kitchens, and custom steel solutions. Quality guaranteed,
            delivered on time.
          </p>

          <div className="hero-btns">
            <Link
              to="/products"
              className="btn-red text-decoration-none px-4 py-3"
            >
              View Our Products
            </Link>
            <Link
              to="/contact"
              className="btn-outline text-decoration-none px-4 py-3"
            >
              Contact Us Today
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Quality Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

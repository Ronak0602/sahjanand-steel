import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-0">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <div className="logo-container">
            <img
              src="https://sahjanandsteel.com/assets/sahjanandsteels-Dd6ImXIv.png"
              alt="Sahjsanand Logo"
              style={{
                height: "60px",
                width: "auto",
              }}
            />
          </div>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span className="fs-1" style={{ lineHeight: 0 }}>
              ×
            </span> /* X icon when open */
          ) : (
            <span className="navbar-toggler-icon"></span> /* 3 lines when closed */
          )}
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-center py-3 py-lg-0 border-top border-lg-0 mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link fw-medium px-3"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium px-3"
                to="/services"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium px-3"
                to="/products"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium px-3"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item d-lg-none mt-3 pt-3 border-top">
              <a
                href="tel:+919924047011"
                className="text-decoration-none text-dark d-block mb-3"
              >
                <i className="bi bi-telephone me-2"></i>+91 99240 47011
              </a>
              <Link
                to="/contact"
                className="btn-primary-custom w-100 d-block"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex align-items-center gap-3">
          <a
            href="tel:+919924047011"
            className="text-decoration-none text-dark d-flex align-items-center"
          >
            <i className="bi bi-telephone me-2 call-icon-custom"></i>
            <span className="fw-medium">+91 99240 47011</span>
          </a>
          <Link
            to="/contact"
            className="btn-primary-custom text-decoration-none"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

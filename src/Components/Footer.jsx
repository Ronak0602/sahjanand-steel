import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer-section pt-5 pb-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <h5 className="fw-bold text-white mb-4">
                Sahjanand Steel's Furniture
              </h5>
              <p className="footer-text">
                Crafting premium steel furniture solutions with experience.
                Quality and reliability are our priorities.
              </p>
              <div className="d-flex gap-3 mt-4">
                <i className="bi bi-facebook social-icon"></i>
                <i className="bi bi-instagram social-icon"></i>
                <i className="bi bi-linkedin social-icon"></i>
              </div>
            </div>

            <div className="col-lg-3">
              <h5 className="fw-bold text-white mb-4">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link to="/" className="text-decoration-none footer-text">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-decoration-none footer-text"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="Products"
                    className="text-decoration-none footer-text"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    className="text-decoration-none footer-text"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h5 className="fw-bold text-white mb-4">Our Services</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link
                    to="/services"
                    className="text-decoration-none footer-text"
                  >
                    Custom Steel Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-decoration-none footer-text"
                  >
                    Modular Steel Kitchen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-decoration-none footer-text"
                  >
                    Steel Gates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-decoration-none footer-text"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h5 className="fw-bold text-white mb-4">Contact Info</h5>
              <div className="footer-text">
                <p>
                  <i className="bi bi-geo-alt me-2"></i> SAHJANAND STEEL
                  FURNITURE, Anand, Gujarat
                </p>
                <p>
                  <i className="bi bi-telephone me-2"></i>
                  <a
                    href="tel:+919924047013"
                    className="text-decoration-none footer-text"
                  >
                    +91 99240 47013
                  </a>
                </p>
                <p>
                  <i className="bi bi-envelope me-2"></i>{" "}
                  <a
                    href="mailto:sahjanandsteel77@gmail.com"
                    className="text-decoration-none footer-text"
                  >
                    sahjanandsteel77@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr className="my-4 border-secondary" />
          <p className="text-center footer-text mb-0">
            © 2026 Sahjanand Steel's Furniture. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

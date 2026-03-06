import { Link } from "react-router-dom";
const Transform = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="transform-box p-5 text-white text-center shadow-lg">
          <h2 className="fw-bold mb-3">Ready to Transform Your Space?</h2>
          <p className="mb-4 text-white">
            Get a free consultation and quote for your next project
          </p>
          <Link
            to="/contact"
            className="btn-primary-custom px-5 text-decoration-none"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Transform;

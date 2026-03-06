import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const ServiceBG = "/assets/images/services.png";

  const servicestyle = {
    backgroundImage: `url(${ServiceBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const coreServices = [
    {
      title: "Custom Steel Furniture",
      desc: "Sofa set, Dining tables, and Luxury chairs.",

      img: "/assets/images/s1.png",
    },
    {
      title: "Modular Steel Kitchen",
      desc: "Rust-proof, durable and modern kitchen setups.",

      img: "/assets/images/s2.png",
    },
    {
      title: "Steel Gates & Railings",
      desc: "Designer safety gates and balcony railings.",

      img: "/assets/images/s3.png",
    },
    {
      title: "Industrial Fabrication",
      desc: "Heavy duty steel structures for factories.",

      img: "/assets/images/s4.png",
    },
    {
      title: "Stainless Steel Glass Railing",
      desc: "Modern glass & steel combinations.",

      img: "/assets/images/s5.png",
    },
    {
      title: "Window Grills",
      desc: "Strong and stylish safety grills for windows.",

      img: "/assets/images/s6.png",
    },
  ];

  return (
    <div className="services-container">
      <section style={servicestyle} className="services-hero">
        <div className="container text-center">
          <h1 className="fw-bold">Our Services</h1>
          <p className="lead">
            Comprehensive steel furniture and fabrication services
          </p>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">Our Core Services</h2>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            From concept to completion, we provide comprehensive steel furniture
            solutions tailored to meet your unique requirements and exceed your
            expectations we prepare items like Railing, Jula, Hichka, Table,
            Chair, Dining Table, Jali, Darvaja, Fast Food Counter and many more.
          </p>

          <div className="row g-4">
            {coreServices.map((service, index) => (
              <div className="col-md-4" key={index}>
                <Link
                  to="/contact"
                  className="card h-100 border-0 shadow-sm service-card-hover overflow-hidden text-decoration-none"
                >
                  <div className="service-img-wrapper">
                    <img src={service.img} alt={service.title} />
                  </div>

                  <div className="card-body p-4 text-start">
                    <div className="icon-box mb-3">
                      <i className={`bi ${service.icon} fs-2 text-danger`}></i>
                    </div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted small">{service.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

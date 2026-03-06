const MainContent = () => {
  const features = [
    {
      title: "Quality Steel",
      desc: "Premium grade steel sourced from trusted suppliers, ensuring durability and longevity in every product we create. We use materials like 202 SS and 304 SS.",
      icon: "award",
    },
    {
      title: "Custom Design",
      desc: "Tailored solutions designed to meet your specific requirements. From concept to completion, we bring your vision to life.",
      icon: "tools",
    },
    {
      title: "On-time Delivery",
      desc: "Reliable project timelines with guaranteed delivery dates. We value your time and ensure prompt completion of all projects.",
      icon: "clock-history",
    },
  ];
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">
          Why Choose Sahjanand Steels & Furniture?
        </h2>
        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "800px" }}>
          With professional experience in steel fabrication and furniture
          manufacturing, we combine traditional craftsmanship with modern
          techniques to deliver exceptional results. Our commitment to quality,
          innovation, and customer satisfaction sets us apart in the industry.
        </p>
        <div className="row g-4">
          {features.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="feature-card p-4">
                <div className="icon-circle mb-3">
                  <i className={`bi bi-${item.icon}`}></i>
                </div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small mt-2 mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainContent;

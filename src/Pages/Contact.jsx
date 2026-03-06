import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero text-center py-3">
        <div className="container">
          <h1 className="fw-bold display-5">Get In Touch</h1>
          <p className="text-muted">
            Ready to start your project? Contact us today.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h3 className="fw-bold mb-4">Contact Information</h3>
              <div className="contact-info-list">
                <div className="info-item d-flex align-items-start mb-4">
                  <div className="info-icon me-3">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Address</h6>
                    <p className="text-muted small mb-1">
                      SAHJANAND STEEL FURNITURE, G F, Rudveda Life Line, 17,
                      Anand - Sojitra Rd, opp. Meldi Mata Mandir, Valasan,
                      Anand, Gujarat 388325, India
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-danger small text-decoration-none fw-bold"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="info-item d-flex align-items-start mb-4">
                  <div className="info-icon me-3">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Contact</h6>
                    <p className="mb-0">
                      <a
                        href="tel:+919924047013"
                        className="text-muted small text-decoration-none"
                      >
                        Kamlesh Patel: +91 99240 47013
                      </a>
                    </p>
                    <p className="mb-0">
                      <a
                        href="tel:+919723294338"
                        className="text-muted small text-decoration-none"
                      >
                        Hitesh Patel: +91 97232 94338
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex align-items-start mb-4">
                  <div className="info-icon me-3">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">WhatsApp</h6>
                    <p className="mb-0">
                      <a
                        href="https://wa.me/919924047013"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted small text-decoration-none"
                      >
                        +91 99240 47013
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex align-items-start mb-4">
                  <div className="info-icon me-3">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="mb-0">
                      <a
                        href="mailto:sahjanandsteel77@gmail.com"
                        className="text-muted small text-decoration-none"
                      >
                        sahjanandsteel77@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex align-items-start">
                  <div className="info-icon me-3">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Business Hours</h6>
                    <p className="text-muted small mb-0">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                    <p className="text-muted small mb-0">
                      Sun: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="form-wrapper p-4 shadow-sm border rounded-4 bg-white">
                <h4 className="fw-bold mb-4">Send Us a Message</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone *"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="col-12">
                      <select className="form-select">
                        <option>Select a service</option>
                        <option>Furniture</option>
                        <option>Kitchen</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Message *"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark-blue w-100 py-2">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section px-3 mb-5">
        <div className="container">
          <div
            className="rounded-4 overflow-hidden shadow-sm border"
            style={{ height: "400px" }}
          >
            <iframe
              title="Sahjanand Steel Furniture Location" // ये लाइन जोड़ दी, अब वार्निंग हट जाएगी
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.665799309!2d72.915720!3d22.554289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f4f0c000001%3A0x67347a868a83d98!2sSAHJANAND%20STEEL%20FURNITURE!5e0!3m2!1sen!2sin!4v1709630000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

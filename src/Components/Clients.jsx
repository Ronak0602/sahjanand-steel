const Clients = () => {
  const clients = [
    "MELDI MATA MANDIR, VALASAN",
    "ASHAPURI MATA PIPLAV",
    "SHIVAM KATHIYAVADI HOTEL, BORSAD",
    "SURYA MANDIR BORSAD",
    "BAPS MANDIR NADIYAD AND VALASAN",
    "MAHADEV MANDIR KARAMSAD",
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">OUR CLIENTS</h2>
        <div className="row g-4">
          {clients.map((client, i) => (
            <div className="col-md-4" key={i}>
              <div className="client-card p-2 bg-white">
                <h6 className="fw-bold mb-0">{client}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

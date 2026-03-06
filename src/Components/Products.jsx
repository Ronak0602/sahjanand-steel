import { useEffect, useState } from "react";
import "./Product.css";

const Products = () => {
  const ProductBG = "/assets/images/product-bg.png";

  const ProductStyle = {
    backgroundImage: `url("${ProductBG}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 0",
    color: "white",
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/furniture",
        );
        const result = await response.json();
        const formattedData = result.products.slice(0, 6).map((item) => ({
          title: item.title,
          desc: item.description,
          img: item.thumbnail,
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-page-container">
      <section style={ProductStyle} className="products-hero text-center">
        <div className="container">
          <h1 className="fw-bold display-4">Our Products</h1>
          <p className="lead">Browse our product gallery and request a quote</p>
        </div>
      </section>

      <section className="py-4 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Our Product Gallery</h2>
            <span className="Product-subtitle">
              Explore our range of premium steel's furniture products, each
              crafted with precision and
            </span>
            <span className="Product-subtitle">attention to detail.</span>
            <div
              className="mx-auto"
              style={{
                width: "100px",
                height: "3px",
              }}
            ></div>
          </div>

          <div className="row g-4 justify-content-center">
            {products.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="product-card-original shadow-sm bg-white border-0">
                  <div className="product-img-container">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-100 h-100 object-fit-contain p-3"
                    />
                  </div>
                  <div className="p-4 text-center border-top">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted small">
                      {item.desc.substring(0, 60)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

import React from "react";

function Banner() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide mb-5 ms-2 me-2 "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/sale.jpg"
            className="d-block w-100 banner-img"
            alt="Sale Banner"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/new.jpg"
            className="d-block w-100 banner-img"
            alt="New Arrivals"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/new2.jpg"
            className="d-block w-100 banner-img"
            alt="Best Deals"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
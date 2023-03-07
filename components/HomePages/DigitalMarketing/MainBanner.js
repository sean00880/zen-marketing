import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="marketing-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="marketing-banner-content">
                
                <hr />
                <h1>Advertising experts helping businesses of all kinds!</h1>
                <p>
                  Schedule a Consultation today! 
                </p>

                <Link href="/contact">
                  <a className="default-btn-two">
                    Contact Us <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src="/images/digital-marketing/zen.webp"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dm-shape1">
          <img src="/images/digital-marketing/shape1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;

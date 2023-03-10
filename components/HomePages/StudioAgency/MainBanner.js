import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="hero-banner video-studio overly-6">
        <div className="video-background">
          <video autoPlay loop src="/video/promo-video.mp4" />
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="main-banner-content">
                    <h1>Welcome to our video studio!</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <Link href="/contact">
                      <a className="btn btn-primary">Contact Us</a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="video-box">
                    <Link href="#play-video">
                      <a
                        onClick={() => setToggler(!toggler)}
                        className="video-btn"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;

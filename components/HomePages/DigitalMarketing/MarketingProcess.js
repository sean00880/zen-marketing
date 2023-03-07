import React from "react";

const MarketingProcess = () => {
  return (
    <>
      <div className="dm-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title marketing-color">Introducing</span>
            <hr />
            <h1>Zen Marketing Solutions</h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div
                className="dm-process-box dm-process-box2"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/digital-marketing/target.webp" alt="image" />
                <h3>TARGETED FACEBOOK ADVERTISING</h3>
                <p>
                We will analyze an individualized advertising plan that will help your business reach branding, SEO, and marketing goals with Facebook.

(other platforms will be coming soon)
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                className="dm-process-box "
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src="/images/digital-marketing/creative.webp" alt="image" />
                <h3>Get Approved</h3>
                <p>
                We are trained and certified to help you with Facebook Advertising
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                className="dm-process-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="/images/digital-marketing/competitive.webp" alt="image" />
                <h3>Enjoy the Benefits</h3>
                <p>
                We offer a limited amount of packages depending on what you are looking for. Email me for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingProcess;

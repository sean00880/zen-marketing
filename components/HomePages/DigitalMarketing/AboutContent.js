import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
      <div className="marketing-about-area overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-image"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <img
                  src="/images/digital-marketing/ssm.svg"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="marketing-about-content">
                <span className="sub-title">About us</span>
                <h2>
                Who are we?
                </h2>
                <p>
                Welcome to Zen Marketing Solutions, a digital marketing agency dedicated to helping businesses achieve their online marketing goals through targeted Facebook marketing among other marketing streams.
                </p>

                <h2>
                Why Us?
                </h2>
                <p>
                1. We work closely with each of our clients to understand their unique business needs and goals, and we tailor our Facebook marketing solutions accordingly. From ad creation and targeting to analytics and reporting, we handle every aspect of your Facebook marketing campaign, so you can focus on what you do best - running your business. 
<br /><br />
2. At Zen Marketing Solutions, we pride ourselves on delivering results-driven digital marketing solutions that help our clients succeed online. Contact us today to learn more about how we can help your business grow with targeted Facebook marketing.
<br /><br />
3. Our team of experienced digital marketers is passionate about helping businesses succeed online. We stay up-to-date with the latest industry trends and best practices to ensure that our clients are always ahead of the curve. Whether you're looking to increase brand awareness, generate more leads, or drive sales, we have the expertise and tools to help you achieve your goals. 
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Global Reach</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Flexible</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>High-End Options</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Dedicated Support</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/about">
                  <a className="default-btn-two">
                    Learn More <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;

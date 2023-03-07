import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="marketing-testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2>What Our Customers Say</h2>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="marketing-testimonials-slides"
          >
            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-image">
                    <img
                      src="/images/digital-marketing/testimonials-img1.jpg"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-content">
                    <i className="icon fa-solid fa-quote-left"></i>
                    <p>
                      “I have been blown away by the results that this marketing website has delivered for my business. From the moment I signed up, their team has been responsive, knowledgeable, and dedicated to helping me achieve my marketing goals. Their platform is incredibly user-friendly and intuitive, making it easy for me to create and launch effective campaigns.”
                    </p>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="info">
                      <h3>Sarah Taylor</h3>
                      <span>Director of RR Law Firms</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-image">
                    <img
                      src="/images/digital-marketing/testimonials-img2.jpg"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-content">
                    <i className="icon fa-solid fa-quote-left"></i>
                    <p>
                      “They take the time to understand my unique needs and tailor their services to help me reach my specific targets. I couldn't be more impressed with their expertise, professionalism, and commitment to delivering results. If you're looking for a marketing website that will help you take your business to the next level, look no further than this amazing team!”
                    </p>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="info">
                      <h3>Richard Turner</h3>
                      <span>CEO & Founder of AL Landscaping</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

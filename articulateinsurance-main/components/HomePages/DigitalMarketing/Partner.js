import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Partner = () => {
  return (
    <>
      <div className="partner-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Partners</span>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner1.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner2.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner3.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner4.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner5.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner6.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner4.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;

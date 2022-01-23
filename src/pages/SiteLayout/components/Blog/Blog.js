import {Information} from "./Information/Information";

import smallImg from "../../../../static/images/social/instagram.svg";
import avatar from "../../../../static/images/avatar.svg";

import style from "./blog.module.css";

import {Swiper, SwiperSlide} from "swiper/react";

import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/css";

export const Blog = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <h2 className={style.titleH2}>Pets love Mixlab!</h2>
        <div>See why we're 5 stars on Yelp, Google and Facebook:)</div>
        <Swiper
          className={style.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={2}
          effect={"cards"}
          initialSlide={1}
          centeredSlides={true}
          loop={true}
        >
          <SwiperSlide>
            <Information
              smallImage={smallImg}
              avatar={avatar}
              name={"Ignat Yaskevich"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Information
              smallImage={smallImg}
              avatar={avatar}
              name={"Ivan Petrov"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Information
              smallImage={smallImg}
              avatar={avatar}
              name={"Pety Ivanov"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

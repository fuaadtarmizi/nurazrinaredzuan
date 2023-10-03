// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import myImage from '../assets/image.jpg';




// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
        <SwiperSlide><img src={myImage} alt="My Image" className="border rounded-2xl" /></SwiperSlide>
      </Swiper>
    </>
  );
}

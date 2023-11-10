import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


// import './styles.css';




const Category = () => {
    return (
        <div className='my-20'>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}>

            </SectionTitle>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h1 className='text-4xl font-bold text-center text-white -mt-16 uppercase'>salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h1 className='text-4xl font-bold text-center text-white -mt-16 uppercase'>pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h1 className='text-4xl font-bold text-center text-white -mt-16 uppercase'>soup</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h1 className='text-4xl font-bold text-center text-white -mt-16 uppercase'>cake</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <h1 className='text-4xl font-bold text-center text-white -mt-16 uppercase'>salad</h1>
        </SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default Category;
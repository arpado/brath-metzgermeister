import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from './useWindowSize';

//Navigation, Pagination,
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../styles/swiper-section.css"

const SwiperSection = () => {

    const slides = [
        {
            image: "heiko-brath-1.jpg",
            title: "Heiko Brath Metzgermeister 1",
            text: "Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.",
        },
        {
            image: "heiko-brath-2.jpg",
            title: "Heiko Brath Metzgermeister 2",
            text: "Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.",
        },
        {
            image: "heiko-brath-3.jpg",
            title: "Heiko Brath Metzgermeister 3",
            text: "Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.",
        },
        {
            image: "heiko-brath-4.jpg",
            title: "Heiko Brath Metzgermeister 4",
            text: "Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.",
        }
    ];

    const [width, height] = useWindowSize();

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={{ clickable: true, prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next', }}
            pagination={{ clickable: true }}
            breakpoints={{
                0: {
                    navigation: {
                        enabled: false,
                    },
                    pagination: {
                        enabled: false,
                    }
                },
                1000: {
                    navigation: {
                        enabled: true,
                    },
                    pagination: {
                        enabled: true,

                    }
                },
            }}
            
            className="swiper-container"
        >
            {slides.map((slide, index) => (
                // style={{ backgroundImage: "url(" + require('../images/' + `${slide.image}`) + ")" }}
                <SwiperSlide className={`swiper-slide ${width > 1000 ? "flex-s-c flex-row" : "flex-c-c flex-column"}`}  key={index}>
                    <img src={require('../images/' + `${slide.image}`)} alt=""/>
                    <div className="slide-textbox flex-c-e flex-column">
                        <h1 className="slide-textbox-item slide-textbox-header">{slide.title}</h1>
                        <p className="slide-textbox-item slide-textbox-paragraph">{slide.text}</p>
                    </div>
                </SwiperSlide>
            ))
            }
            <div className="main-swiper-button-prev swiper-button-prev"></div>
            <div className="main-swiper-button-next swiper-button-next"></div>
        </Swiper>
    );
}

export default SwiperSection;
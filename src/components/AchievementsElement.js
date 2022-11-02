import SectionbreakLogo from './SectionbreakLogo';
import genussnetzImage from '../images/genussnetz-logo.png';
import "../styles/achievements-section.css";
import "../styles/flex-to-two-by-four-grid.css";
import ButtonElement from './ButtonElement';
import useWindowSize from '../modules/useWindowSize';

import { Swiper, SwiperSlide } from 'swiper/react';
//Navigation, Pagination,
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AchievementsElement = () => {
    const awards = [
        {
            image: "nagrada1.svg",
            text: "Tollit argumentum genau Saepe lobortis",
        },
        {
            image: "nagrada2.svg",
            text: "Schneewittchen denique"
        },
        {
            image: "nagrada3.svg",
            text: "Grimms Märchen expetenda",
        },
        {
            image: "nagrada4.svg",
            text: "Mettwurst mei ullum gloriatur.",
        },
    ];
    const testimonials = [
        {
            name: "Maria Kartofeln",
            occupation: "",
            testimonial: "Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.",
            stars: 2,
        },
        {
            name: "Halling Tobias",
            occupation: "Koch",
            testimonial: "Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco.",
            stars: 3,
        },
        {
            name: "Rene Weinstein",
            occupation: "",
            testimonial: "Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.",
            stars: 1,
        },
        {
            name: "Matthias Tobias Calcullus",
            occupation: "Keller",
            testimonial: "Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco.",
            stars: 3,
        },
        {
            name: "Anna Josefine",
            occupation: "Koch",
            testimonial: "Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.",
            stars: 2,
        },
    ]

    const [width, height] = useWindowSize();

    return (
        <div className="achievements-container flex-c-c">
            <div className="layout-helper-container flex-c-c flex-column">
                <div className={`genussnetz-section ${width > 1000 ? "flex-row flex-c-e" : "flex-column flex-c-c"}`}>
                    <div className="genussnetz-image flex-c-c">
                        <img src={genussnetzImage} alt="" className="genussnetz-image" />
                    </div>
                    <div className={`genussnetz-text flex-column ${width > 1000 ? "flex-sb-s" : "flex-c-c"}`}>
                        <h2>Metzgerei Brath ist Mitglied im Genussnetzwerk</h2>
                        <ButtonElement text={"Gehen zu site"} color={"red"} />
                    </div>
                </div>
                <SectionbreakLogo />
                <div className={`awards-section ${width < 1100 ? 'flex-column' : 'flex-row'}`}>
                    <h3 className="flex-c-c">Auszeichnungen</h3>
                    <div className="flex-to-grid-image-container">
                        {awards.map((award, index) => (
                            <div className={`award-container flex-c-c flex-column flex-to-grid-item flex-to-grid-item-${index}`} key={index}>
                                <div className="medal-container flex-c-c">
                                    <img src={require(`../images/${award.image}`)} alt="" />
                                </div>
                                <p>{award.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <SectionbreakLogo />
                <div className="testimonials-section flex-c-c flex-column">
                    <h3>Empfehlungs</h3>
                    <h2>Was die Leute über uns sagen</h2>
                    <Swiper
                        // EZ VOLT A GOND!
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1000: {
                                slidesPerView: 3,
                            }
                        }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation={{ clickable: true, prevEl: '.testimonial-button-prev', nextEl: '.testimonial-button-next', }}
                        // pagination={{ clickable: true }}
                        className="testimonial-container flex-c-c flex-column"
                    >
                        {/* style={{backgroundImage: `url('./images/heiko-brath-1.jpg')`}} */}
                        {/* "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")", */}
                        {/* 'heiko-brath-1.jpg' */}
                        {/* `heiko-brath-${index +1}.jpg` */}
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide className="testimonial-slide flex-c-c flex-column" key={index}>
                                <p>{testimonial.stars}</p>
                                <p>{testimonial.testimonial}</p>
                                <p>{testimonial.name}</p>
                                <p>{testimonial.occupation}</p>
                            </SwiperSlide>
                        ))}
                        <div className="testimonial-buttons-container flex-se-c">
                            <div className="testimonial-button-prev swiper-button-prev"></div>
                            <div className="testimonial-button-next swiper-button-next"></div>
                        </div>

                    </Swiper>
                    <ButtonElement text={"Alle Berichte"} color={"red"} />
                </div>
            </div>
        </div>

    );
}

export default AchievementsElement;
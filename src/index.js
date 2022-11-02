// General imports //

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { useLayoutEffect, useState } from 'react';

// Section imports //

import HeaderElement from './components/HeaderElement';
import SwiperSection from './components/SwiperSection';
import DryAgedSection from './components/DryAgedSection';
import GrillKurs from './components/GrillKurs';
import HandWerk from './components/HandWerk';
import CustomSpicesSection from './components/CustomSpicesSection';
import ParallaxElement from './components/ParallaxElement';
import AchievementsElement from'./components/AchievementsElement';
import FooterElement from './components/FooterElement';
import ImpressumElement from './components/ImpressumElement';

// Check window size //

// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//       function updateSize() {
//           setSize([window.innerWidth, window.innerHeight]);
//       }
//       window.addEventListener('resize', updateSize);
//       updateSize();
//       return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// }

// const [width, height] = useWindowSize();

// Root //

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <HeaderElement />
    <SwiperSection />
    <DryAgedSection />
    <GrillKurs />
    <HandWerk />
    <CustomSpicesSection />
    <ParallaxElement />
    <AchievementsElement />
    <FooterElement />
    <ImpressumElement />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

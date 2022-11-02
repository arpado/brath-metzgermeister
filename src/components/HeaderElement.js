import { useState } from 'react';
import logo from '../images/logo.svg';
import pdfIcon from '../images/pdf-icon.svg';
import clock from '../images/clock.svg';
import "../styles/header.css";
import useWindowSize from '../modules/useWindowSize';
import NavigationMenu from './NavigationMenu';

const links = ['Die Metzgerei', 'Dry Aged', 'Fleischversand', 'Events/Kurse', 'Partyservice', 'Tagesessen', 'Impressum', 'Kontakt',]

// get window.innerSize //

// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//         function updateSize() {
//             setSize([window.innerWidth, window.innerHeight]);
//         }
//         window.addEventListener('resize', updateSize);
//         updateSize();
//         return () => window.removeEventListener('resize', updateSize);
//     }, []);
//     return size;
// }

const HeaderElement = () => {
    const [width, height] = useWindowSize();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <header>
            <div className="logo-section">
                <img src={logo} alt="brath-logo" className={width > 1000 ? 'logo-large' : 'logo-small'} />
            </div>
            <div className="header-links">
                <div className={`header-top ${width > 1000 ? 'flex-c-c' : 'flex-e-c'}`}>
                    {width > 1000 && <NavigationMenu links={links} styleSetup={"flex-c-c flex-row horizontal-link-section"} />}
                    <div className="pdf-link">
                        <a href="/">
                            <img src={pdfIcon} alt="" />
                            <p>Download</p>
                        </a>
                    </div>
                    {width <= 1000 && <div className="hamburger flex-c-c" onClick={handleOpen}>
                        <div className="hamburger-bar"></div>
                    </div>}
                    {width <= 1000 && open && <NavigationMenu links={links} styleSetup={"flex-c-s flex-column vertical-link-section"} isOpen={open} />}
                </div>
                <div className="header-bottom">
                    {width > 1000 && <img src={clock} alt="" />}
                    <div className={width > 1000 ? 'flex-row' : 'flex-column flex-c-e'}>
                        <div>
                            {width > 1000 ? <b>Opentime:&nbsp;</b> : <b>Christmas opentime:</b>}
                        </div>
                        <div className={`flex-e-c ${width < 1000 ? 'open-hours-small' : null}`}>
                            Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderElement;
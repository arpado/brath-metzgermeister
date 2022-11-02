import logo from '../images/logo-simple.png';
import "../styles/sectionbreak-logo.css";

const SectionbreakLogo = () => {
    return (
        <div className="sectionbreak-logo-container flex-sb-c">
            <hr className="horizontal-line" />
            <img src={logo} alt="" />
            <hr className="horizontal-line" />
        </div>
    );
}

export default SectionbreakLogo;
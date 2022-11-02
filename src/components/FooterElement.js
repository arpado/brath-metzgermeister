import logo from '../images/logo.svg';
import "../styles/footer-section.css";
import useWindowSize from '../modules/useWindowSize';


const FooterElement = () => {
    const contactsList = [
        {
            icon: "location.png",
            text: "Klauprechtstraße 25",
        },
        {
            icon: "",
            text: "76137 Karlsruhe, Germany",
        },
        {
            icon: "telephone.png",
            text: "+49 721 358060",
        },
        {
            icon: "email.svg",
            text: "info@partyservice-brath.de",
        },
    ];
    const socialMediaList = ["twitter.png", "facebook.png", "instagram.png", "youtube.png"]

    const [width, height] = useWindowSize();


    return (
        //flex-se-c
        <div className={`footer-container ${width > 1000 ? "flex-row" : "flex-column"}`}>
            <div className={`footer-contacts-container flex-column  ${width > 1000 ? "flex-c-s" : "flex-c-c"}`}>
                {contactsList.map((contact, index) => (
                    <div className="footer-contact flex-c-c " key={index}>
                        {contact.icon && <img src={require(`../images/${contact.icon}`)} alt="" />}
                        {!contact.icon && <div className="icon-placeholder"></div>}
                        <p className="contact-text">{contact.text}</p>
                    </div>
                ))}
            </div>
            <div className="footer-logo flex-c-c">
                <img src={logo} alt="" />
            </div>
            <div className="social-media-container flex-row flex-c-c">
                <h3 className="">Besuchen Sie uns auf:</h3>
                <div className="social-media-logo-container flex-row flex-c-c">
                    {socialMediaList.map((icon, index) => (
                        <div className="social-media-logo-btn flex-c-c" key={index}>
                            <img src={require(`../images/${icon}`)} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterElement;
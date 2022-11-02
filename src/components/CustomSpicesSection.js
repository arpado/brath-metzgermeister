import "../styles/custom-spices-section.css";
import useWindowSize from './useWindowSize';

const CustomSpicesSection = () => {

    const spicesContent = {
        title: "Custome spices for your meat",
        subtitle: "Turnbeutel nostrud exercitation ullamco Sprechen Sie deutsch",
        text: [
            "Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.",
            "Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.",
        ],
        pic: "4541cc99083f618a22b772228f8a9698.jpg"
    }

    const [width, height] = useWindowSize();
    const paddingValue = (width - 1000) / 2;


    function setMargin(width, paddingValue) {
        switch (width > 1000) {
            case (true):
                return { paddingRight: paddingValue + 'px' }
            case (false):
                return { paddingRight: 1 + 'rem' }
            default:
                console.log("margin fail in CustomSpices component.")
        }
    }


    return (
        <div className={`custom-spices-container ${width > 1000 ? "flex-e-c flex-row" : "flex-column-reverse"} `}>
            {/* <div className=" flex-s-c" > */}
                <div className="custom-spices-pic-container flex-c-c">
                    <img src={require(`../images/${spicesContent.pic}`)} alt="" />
                </div>
                <div className="custom-spices-text-container flex-stretch-s flex-column" style={setMargin(width, paddingValue)}>
                    <h2>{spicesContent.title}</h2>
                    <h3>{spicesContent.subtitle}</h3>
                    {spicesContent.text.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            {/* </div> */}
        </div>
    );
}

export default CustomSpicesSection;
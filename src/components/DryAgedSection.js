import "../styles/dry-aged-section.css";
import ButtonElement from './ButtonElement';
import useWindowSize from './useWindowSize';


const DryAgedSection = () => {
    const [width, height] = useWindowSize();
    const marginValue = (width - 1000) / 2;


    function setMargin(width, marginValue) {
        switch (width > 1000) {
            case (true):
                return {marginLeft: marginValue + 'px', marginRight: marginValue + 'px'}
            case (false):
                return {margin: 0 + 'px'}
            default:
                console.log("margin fail in DryAged component.")
        }
    }


    const dryAged = {
        title: "Dry aged",
        subtitle: "Alte Wutz, Dry Aged",
        text: {
            para1: "Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.",
            para2: "id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior."
        },
        images: ["287e4a29fb95622355c7023ec0f765ff.jpg", "93567ed87a1475783cc3a90355825a87.jpg", "d368bea5bcb8ed88cfcf994b7a518068.jpg", "1c78d243bd195e6ff002f8fdbc24e5d0.jpg",],
    }

    return (
        <div className="dry-aged-container flex-c-c">
            {/* style={`${width > 1000 ? {margin:  + 'px'} : {margin: 0}}`} */}
            <div className={`layout-helper-container ${width < 1000 ? "flex-column-reverse flex-c-c" : "flex-row flex-se-stretch"}`} style={setMargin(width, marginValue)}>
                <div className="dry-aged-text-container flex-se-stretch flex-column">
                    <div className="flex">
                        <h2>{dryAged.title}</h2>
                        <h3>{dryAged.subtitle}</h3>
                    </div>
                    <div className="flex-c-c flex-column">
                        {Object.entries(dryAged.text).map(([key, value]) => (
                            <p key={key}>{value}</p>
                        ))}
                    </div>
                    <div className="dry-aged-btns flex-se-c">
                        <ButtonElement text={"Dry Aged"} color={"red"} />
                        <ButtonElement text={"Alte Wurtz"} color={"red"} />
                    </div>
                </div>

                <div className="dry-aged-pics-container ">
                    {dryAged.images.map((image, index) => (
                        <img src={require(`../images/${image}`)} alt="" key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DryAgedSection;
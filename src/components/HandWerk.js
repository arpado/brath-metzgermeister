import SectionbreakLogo from './SectionbreakLogo';
import ButtonElement from './ButtonElement';
import "../styles/handwerk-section.css";
import "../styles/flex-to-two-by-four-grid.css";

const HandWerk = () => {
    const handwerkContent = {
        title: "Das Handwerk",
        subtitle: "alles über unsere Hausgemachte Produkte",
        text: {
            para1: "Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.",
            para2: "Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.",
            para3: "id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior",
        },
        productImages: ["group661.jpg", "group660.jpg", "group659.jpg", "group658.jpg",]
    }

    return (
        <div className="handwerk-container flex-c-c flex-column">
            <div className="handwerk-text flex-c-c flex-column">
                <h2>{handwerkContent.title}</h2>
                <h3>{handwerkContent.subtitle}</h3>
                {Object.entries(handwerkContent.text).map(([key, value]) => (
                    <p key={key}>{value}</p>
                ))}
                <ButtonElement text={"Das Handwerk"} color={"red"}/>
            </div>
            <SectionbreakLogo />
            <div className="flex-to-grid-image-container product-images-container">
                {handwerkContent.productImages.map((image, index) => (
                    <img src={require(`../images/${image}`)} alt="" key={index} className={`flex-to-grid-item flex-to-grid-item-${index}`}/>
                ))}
            </div>
        </div>
    );
}

export default HandWerk;
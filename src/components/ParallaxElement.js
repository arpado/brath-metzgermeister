import "../styles/parallax-section.css";
import ButtonElement from './ButtonElement';

const ParallaxElement = () => {
    return (
        <div className="parallax-container flex-c-c flex-column">
            {/* <div className="parallax-background-image"> */}
                <h3>Fleischversand</h3>
            {/* </div> */}
            <ButtonElement text={"Jetzt bestellen"} color={"white"}/>
        </div>
    );
}
 
export default ParallaxElement;
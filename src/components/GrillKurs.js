import "../styles/grillkurs-section.css";
import ButtonElement from './ButtonElement';
// import getMargin from './getMargin';
import useWindowSize from '../modules/useWindowSize';


const GrillKurs = () => {
    const grillkursContent = {
        title: "Buchen Sie den Grillkurs jetzt",
        text: ["professioneller Lehrer", "ausgezeichneter Metzger", "1 Tag", "lernen Sie die Kunst des Grillens",],
        pic: "victoria-shes-UC0HZdUitWY.jpg",
    }

    const [width, height] = useWindowSize();
    const paddingValue = (width - 1000) / 2;


    function setPadding(width, paddingValue) {
        switch (width > 1000) {
            case (true):
                return {paddingLeft: paddingValue + 'px'}
            case (false):
                return {padding: 0 + 'px'}
            default:
                console.log("margin fail in GrillKurs component.")
        }
    }

    return (
        <div className={`grillkurs-container ${width > 1000 ? 'flex-e-c flex-row' : 'flex-c-c flex-column'}`}>
{/* layout-helper-container */}
            {/* <div className="layout-helper-container flex-s-c flex-stretch-s" > */}
                <div className="grillkurs-text-container flex-column" style={setPadding(width, paddingValue)}>
                    {/* <div className="grillkurs-text flex-se-s flex-column"> */}
                    <h2>{grillkursContent.title}</h2>
                    <ul>
                        {grillkursContent.text.map((bulletpoint, index) => (
                            <li key={index}>{bulletpoint}</li>
                        ))}
                    </ul>
                    {/* </div> */}
                    <ButtonElement text={"Grillkurs"} color={"white"} />
                </div>
                
            {/* </div> */}
            <div className="grillkurs-pic-container flex-c-c">
                <img src={require(`../images/${grillkursContent.pic}`)} alt="" />
            </div>

        </div>
    );
}

export default GrillKurs;
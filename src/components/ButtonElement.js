import "../styles/button-element.css";

function getButtonColor(color) {
    switch (color) {
        case "red":
            return "button-red";
        case "white":
            return "button-white";
        default:
            console.log("error while getting button color")
            break;
    }
}

const ButtonElement = (props) => {
    return (
        <div className={`button-element flex-c-c ${getButtonColor(props.color)}`}>
            <p>{props.text}</p>
        </div>
    );
}
 
export default ButtonElement;
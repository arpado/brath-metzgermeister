// import "../styles/dropdown-menu.css"

const NavigationMenu = (props) => {
    return (
        // <div className="dropdown-container">
            <ul className={`${props.styleSetup} ${props.isOpen ? "active" : null}`}>
               {props.links.map((link, index) => (
                   <li key={index}>{link}</li>
               ))}
            </ul>
        // </div>
    );
}
 
export default NavigationMenu;
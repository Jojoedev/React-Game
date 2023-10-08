import { PropTypes } from "prop-types";


const Button = ({colorStyle, textTwo, onChangeBtn}) =>{
   
    return(
        <div>
        <button onClick={onChangeBtn} className = {colorStyle ? 'green' : 'red'}>{textTwo? 'Add' : 'Close'}</button>
          
        </div>
    );
}

Button.defaultProps = {
    color: "steelblue",
}

Button.propTypes = {
    text : PropTypes.string,
    color: PropTypes.string,
}

export default Button;
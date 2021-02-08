import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/simpleCounter.css';

const SimpleCounter = (props) => {
    return (
        <div className="counter">
            <div className="calendar">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="six">{props.dSix}</div>
            <div className="five">{props.dFive}</div>
            <div className="four">{props.dFour}</div>
            <div className="three">{props.dThree}</div>
            <div className="two">{props.dTwo}</div>
            <div className="one">{props.dOne}</div>
        </div>
    );

}

export default SimpleCounter;
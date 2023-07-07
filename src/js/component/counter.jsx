import React from "react";
import PropTypes from "prop-types";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="counterBase">
			<div className="counterIcon">{<i className="far fa-clock"></i>}</div>
			<div className="counterNumber">{props.numberSix}</div>
			<div className="counterNumber">{props.numberFive}</div>
			<div className="counterNumber">{props.numberFour}</div>
			<div className="counterNumber">{props.numberThree}</div>
			<div className="counterNumber">{props.numberTwo}</div>
			<div className="counterNumber">{props.numberOne}</div>
			
		</div>
	);
};

SimpleCounter.propTypes = {
	numberSix: PropTypes.number,
	numberFive: PropTypes.number,
	numberFour: PropTypes.number,
	numberThree: PropTypes.number,
	numberTwo: PropTypes.number,
	numberOne: PropTypes.number,
}
export default SimpleCounter;

import React from 'react';
import './App.css';

function CalculatorDesign(props){
	const { Callbackfun , equation ,isNumber,isClear }=props;
        return(
            <div className="calculator">
					<h3>Calculator</h3>
					<input type="text" name="num" className="calculator-screen z-depth-1" value={props.s.num}  disabled/>
					<div className="calculator-keys">
						<button type="button" className="btn btn-info" value="+" onClick={equation} >+</button>
						<button type="button" className="btn btn-info" value="-" onClick={equation} >-</button>
						<button type="button" className="btn btn-info" value="*" onClick={equation} >*</button>
						<button type="button" className="btn btn-info" value="/" onClick={equation} >/</button>

						<button type="button" className="btn btn-info" value="7" onClick={isNumber} >7</button>
						<button type="button" className="btn btn-info" value="8" onClick={isNumber} >8</button>
						<button type="button" className="btn btn-info" value="9" onClick={isNumber} >9</button>

						<button type="button" className="btn btn-info" value="4" onClick={isNumber} >4</button>
						<button type="button" className="btn btn-info" value="5" onClick={isNumber} >5</button>
						<button type="button" className="btn btn-info" value="6" onClick={isNumber} >6</button>

						<button type="button" className="btn btn-info" value="1" onClick={isNumber} >1</button>
						<button type="button" className="btn btn-info" value="2" onClick={isNumber} >2</button>
						<button type="button" className="btn btn-info" value="3" onClick={isNumber} >3</button>

						<button type="button" className="btn btn-info" value="0" onClick={isNumber} >0</button>
						<button type="button" className="btn btn-info" value="%" onClick={equation} >%</button>
						<button type="button" className="btn btn-info" value="" onClick={isClear}>AC</button>

						<button type="button" className	="equal-sign btn btn-default" value="=" onClick={(e) => {Callbackfun(e); }}>=</button>
					</div>
				</div>
        );
}
export default CalculatorDesign;
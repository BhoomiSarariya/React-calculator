import React from 'react';
import './App.css';
import CalculatorDesign from './CalculatorDesign';
class Calculator extends React.Component {
	state= {
		num:'',
		num1:'',
		num2:'',
		operator:'',
		flag:true,
		result:''
	}
	Callbackfun=(event)=>{
		
			let item=this.state.operator; 
			let {result , num2 ,num1 }=this.state
			switch (item) {
        case '+':
					result = Number(num2) + Number(num1)
					this.setState({
						result:Number(this.state.num1) + Number(this.state.num2),
					})
					break;
        case '-':
					result = num1 - num2;
					this.setState({
						result:Number(this.state.num1) - Number(this.state.num2),
					})
          break;
        case '*':
					result = num2 * num1;
					this.setState({
						result:Number(this.state.num1) * Number(this.state.num2),
					})
          break;
        case '/':
					result = num1 / num2;
					this.setState({
						result:Number(this.state.num1) / Number(this.state.num2),
					})
          break;
        case '%':
            result = num1 % num2;
					this.setState({
						result:Number(this.state.num1) % Number(this.state.num2),
					})
          break;
        default:
          console.log('Something else!!!');
		}
		setTimeout(()=>{
			this.setState({
				num:this.state.result
			})
		});
				console.log(result);
		console.log("num",	this.state.num);
	}
	equation=(event)=>{
		this.setState({
			num: this.state.num+event.target.value,
			operator:event.target.value,
			flag:false
		});
		console.log("num",this.state.num);
		console.log(this.state.operator);
	}

	isNumber=(event)=>{
			const {flag}=this.state;
			if (flag) {
				this.setState({num1:(this.state.num1+event.target.value),
				num: this.state.num + event.target.value
				});
			} else {
				this.setState({num2:(this.state.num2+event.target.value),
				num: this.state.num + event.target.value
				});	
			}
			console.log("num1",this.state.num1);
			console.log("num2",this.state.num2);
		}

	showResult=(result)=> this.state.result

	isClear=()=>{
		this.setState({
			num:'',
			num1:'',
			num2:'',
			flag:true
		})
	}
	render() {
        return(
            <div>
                
                <CalculatorDesign Callbackfun={this.Callbackfun} equation={this.equation} 
                isClear={this.isClear} 
                isNumber={this.isNumber} showResult={this.showResult} s={this.state}/>
            </div>
        )
			
	}
}
export default Calculator;

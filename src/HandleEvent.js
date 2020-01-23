import React from 'react';
import './HandleEvent.css';
class HandleEvent extends React.Component{
	state={
		showOne:false,
		showTwo:false,
		showThree:false,
		input:''
	}
	handleExampleShowone=()=>{
		this.setState((pState) => ({
			showOne: !pState.showOne,
			showTwo: pState.showTwo,
			showThree:pState.showThree
		}),()=>{
			console.log("one",	this.state.showOne)
			console.log("two",	this.state.showTwo)
			console.log("three",	this.state.showThree)})	
	}
	handleExampleShowTwo=()=>{
		this.setState(
			(pState) => ({
				showOne: pState.showOne,
				showTwo: !pState.showTwo,
				showThree:pState.showThree
			}),()=>{
				console.log("one",	this.state.showOne)
				console.log("two",	this.state.showTwo)
				console.log("three",	this.state.showThree)})
	}
	handleExampleShowThree=()=>{
		this.setState((pState) => ({
				showOne: pState.showOne,
				showTwo: pState.showTwo,
				showThree:!pState.showThree
			}),()=>{
				console.log("one",	this.state.showOne)
				console.log("two",	this.state.showTwo)
				console.log("three",	this.state.showThree)})
	}
	inputChange(e){
		this.setState({ input: e.target.value });
	}
    render(){
			let Text ,Element1 ,Element2 ,Element3;
			if(this.state.showOne){
				Element1= (<>				
					<p className="col-md-4 textOne">
						<h4>Example 1</h4>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
						<div className="col-md-12 ">
                <p>Binding method</p>
                <input onChange={this.inputChange.bind(this)}></input><br />
                <p>Input value: {this.state.input}</p>
          </div>
					</p>
					</> 	
				)
			}
			if(this.state.showTwo){
				Element2=(<>
						<p className="col-md-4 textTwo">
							<h4>Example 2</h4>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
							<div className="col-md-12 ">
							<div>
                <p>Binding method in constructor</p>
                <input onChange={this.inputChanged}></input><br />
                <p>Input value: {this.state.input}</p>
            </div>
          		</div>
						</p>
					</>
				)
			}
			if(this.state.showThree){
				Element3=(<>
						<p className="col-md-4 textThree">
						<h4>Example 3</h4>
					  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
						<div className="col-md-12">
                
            </div>
					</p>
					</>
				)
			}
			if(this.state.showOne==false || this.state.showTwo==false ||this.state.showThree==false){
				Text =(
					<div className="col-md-12 text">
							<h4>click on button</h4>
					</div>
				)
			}
				return(
          <div className="container">
						<div className="row">
							<p>if-else hide and show and element variables and prevent component</p>
							{Text}
						</div>
						<div className="row">
							<button className="btn col-md-4" onClick={this.handleExampleShowone}>Example 1</button>
							<button className="btn col-md-4" onClick={this.handleExampleShowTwo}>Example 2</button>
							<button className="btn col-md-4" onClick={this.handleExampleShowThree}>Example 3</button>
							<div className="row">
								{Element1}{Element2}{Element3}
							</div>
						</div>
					</div>
        )
    }
}
export default HandleEvent;

import React, { Component } from 'react'

export default class Information extends Component {
    constructor(props){
        super(props);
        this.state ={
            increase: this.props.age,
        };
    }
    
        incrementAge = () => {
            this.setState({increase: this.props.age+1})
        }
    render() {
        return (
            <div>
                <h1> {this.props.fname}, {this.props.lname} </h1>
                <p> Age: {this.props.age} </p>
                {this.props.children}
                <button onClick={this.incrementAge}>Birthday Button for {this.props.fname} {this.props.lname}</button>
            </div>
        )
    }
}

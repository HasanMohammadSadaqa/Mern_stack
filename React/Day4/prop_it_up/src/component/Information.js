import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.fname}, {this.props.lname} </h1>
                <p> Age: {this.props.age} </p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        )
    }
}

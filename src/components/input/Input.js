import React, { Component } from 'react'
import './input.css';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            description: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="Input">
                <div className="group-name1">
                    <label htmlFor="groupName">Name :</label>
                    <input
                        className="groupName"
                        type="text"
                        onChange={this.handleChange}
                        name="groupName"
                        placeholder="group name"
                    />
                </div>
                <div className="group-name2">
                    <label htmlFor="description">Description:</label>
                    <input
                        className="description"
                        type="text"
                        onChange={this.handleChange}
                        name="description"
                        placeholder="description"
                    />
                </div>


            </div>
        )
    }
}

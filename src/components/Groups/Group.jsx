import React, { Component } from 'react';
import axios from 'axios'
import Cards from '../Cards/Cards';
import './group.css'
import GroupLogo from '../Group-logo/GroupLogo';
import Input from '../input/Input';
class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const proxy = "https://cors-anywhere.herokuapp.com/"
        const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
        const result = await axios(proxy + url, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Accept': 'application/json'
            }
        })
        this.setState({ data: result.data })
    }
    render() {
        return (
            <div className="group">
                <div className="group-header">
                    <GroupLogo />
                    <Input />
                </div>
                
                <div className="group-data">
                    {this.state.data.map(res => (
                        <Cards key={res.id} name={res.name} srcUrl={res.Image} />
                        
                    ))} 
                </div>
                <div className="group-buttons">
                    <button className="group-upload">Upload</button>
                    <button className="group-remove">Remove</button>
                </div>
                
            </div>
        );
    }
}

export default Group;
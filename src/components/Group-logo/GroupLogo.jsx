import React, { Component } from 'react';
import './group-logo.css';

export default class GroupLogo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png"
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' />;
        }
        return (
            <form>
                <div className="form-group preview">
                    {imgPreview}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                </div>
                
            </form >
        )
    }
}
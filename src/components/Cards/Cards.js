import React from 'react'
import './cards.css'

export default function Cards({ srcUrl, name }) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={srcUrl} alt="profile" width="100%" />
                <div className="card-body">
                    <h4><strong>{name}</strong></h4>
                </div>
            </div>
        </div>
    )
}

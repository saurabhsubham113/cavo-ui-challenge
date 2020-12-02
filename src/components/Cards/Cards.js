import React from 'react'
import './cards.css'

export default function Cards({ srcUrl, name }) {
    let toggle = true
    const handleClick = () => {
        if (toggle) {
            toggle = !toggle
        }
    }
    return (
        <div className="card-container">
            <div className="card">
                    <img onClick={handleClick} src={srcUrl} alt="profile" width="100%" />

                <div className="card-body">
                    <h4><strong>{name}</strong></h4>
                </div>
            </div>
        </div>
    )
}

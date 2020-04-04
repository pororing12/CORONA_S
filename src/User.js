import React from 'react';
import './App.css'

function User({id, name, total, increase}) {
    return (
        <div className = "flex">
            <div className = "total-box">
            <h1 className = "">{name}</h1>
            <h5>{total}</h5>
            <h5>{increase}</h5>
            </div>
        </div>
    )
}

export default User;
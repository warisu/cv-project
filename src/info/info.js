import React from "react";
import './info.css'

const Info = ()=> {
    return (
    <div className="info">
        <h3>Personal Information</h3>
        <form>
            <input type='text' placeholder="First name"/>
            <input type='text' placeholder="Last name"/>
            <input type='text' placeholder="Title"/>
            <input type="photo" placeholder="Photo"/>
            <input type="text" placeholder="Address"/>
            <input type="number" placeholder="Phone number"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Description"/>
        </form>   
    </div>
    )
}

export default Info;

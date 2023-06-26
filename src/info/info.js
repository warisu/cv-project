import React from "react";
import './info.css'

const  Info = ()=> {
    return (
    <div className="info">
       <div>
        <h3>Personal Information</h3>
        <form>
            <input type='text' id='taskInput' placeholder="Enter your name"/>
            <input type='text' id='taskInput' placeholder="Enter your email"/>
            <input type='text' id='taskInput' placeholder="Enter your phone number"/>
            <input type="photo" id='taskInput' placeholder="Photo"/>
        </form>   
       </div>
       <div>
        <h3>Educational Experience</h3>
        <form>
            <input type='text' id='taskInput' placeholder="Title of study"/>
            <input type='number' id='taskInput' placeholder="Date of study"/>
            <imput type='number' id='taskInput' placeholder='Date of Graduation'/>
        </form>
       </div>
       <div>
        <h3>Practical Experience</h3>
            <form>
                <input type='text' id='taskInput' placeholder="How many years of programming language do you have"/>
                <input type='number' id='taskInput' placeholder="How long have you use javascript?? "/>
            </form>
       </div>
       </div>
    )
}

export default Info;

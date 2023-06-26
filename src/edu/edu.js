import React from "react";
import './edu.css'

const Edu = () => {
   return (
        <div>
           <form>
                <input type='text' id='taskInput' placeholder="School name"/>
                <input type='text' id='taskInput' placeholder="Title of study"/>
                <input type='number' id='taskInput' placeholder="Date of study"/>
            </form>    
        </div>
   )  
}

export default Edu
import React, { Component } from 'react'

class EducationInfo extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h1>Education</h1>
                <form>
                    <label htmlFor='school-name'>School name</label>
                    <input type='text' id='school-name'></input>
                    <label htmlFor='education-title'>Title</label>
                    <input type='text' id='education-title'></input>
                    <label htmlFor='start-date'>From</label>
                    <input type='date' id='start-date'></input>
                    <label htmlFor='First-name'>to</label>
                    <input type='date' id='end-date'></input>                    
                    <button type='submit'>Add</button>
                    <button type=''>Delete</button>
                </form>
            </div>
        )
    }
}

export default EducationInfo;
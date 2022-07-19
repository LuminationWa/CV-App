import React, { Component } from 'react'

class ExperienceInfo extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h1>Work experience</h1>
                <form>
                    <label htmlFor='company-name'>Company</label>
                    <input type='text' id='company-name'></input>
                    <label htmlFor='company-position'>Position</label>
                    <input type='text' id='company-position'></input>
                    <label htmlFor='job-start-date'>From</label>
                    <input type='date' id='job-start-date'></input>
                    <label htmlFor='job-end-date'>To</label>
                    <input type='date' id='job-end-date'></input>
                    <button type='submit'>Add</button>
                    <button type=''>Edit</button>
                </form>
            </div>
        )
    }
}

export default ExperienceInfo;
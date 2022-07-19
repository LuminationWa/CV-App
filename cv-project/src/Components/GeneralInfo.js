import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h1>Personal information</h1>
                <form>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' id='first-name'></input>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' id='last-name'></input>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email'></input>
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input type='text' id='phone-number'></input>
                    <button type='submit'>Add</button>
                    <button type=''>Delete</button>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;
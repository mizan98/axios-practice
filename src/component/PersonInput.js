import axios from "axios";
import React from 'react'


export default class PersonInput extends React.Component {

    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({name: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()

        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, {user}).then( res => {
            console.log(res.data)
        }
            
        )
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person name:
                    <input type="text" name="name" onChange={this.handleChange}></input>
                    <button type="submit">Add</button>
                </label>

            </form>
        )
    }
}
import axios from "axios";
import React from 'react'


export default class PersonList extends React.Component {

    state = {
        persons: [],
        userName: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                console.log(res.data)
                this.setState({
                    persons: res.data,
                    userName: res.data
                })
            }
        )
    }

    render(){
        return (
            <ul>
                {this.state.persons.map( person => <li key={person.id}>{person.name}</li>)}
                 {this.state.userName.map( userNames => <li key={userNames.id}>{userNames.username}</li>)}
            </ul>
        )
    }
}

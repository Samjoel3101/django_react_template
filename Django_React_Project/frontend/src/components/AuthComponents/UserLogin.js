import React, { Component } from 'react'

class UserLogin extends Component {
    constructor(props){
        super(props)
        this.handleInput = this.handleInput.bind(this); 
        this.state = {
            username: '',
            email: '', 
            password: ''
        }
    }

    handleInput(event){
        event.preventDefault()
        const name = event.target.name
        this.setState({[name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username
                    <input value = {this.state.username} name = 'username'
                           type = "text" onChange = {this.handleInput} />
                    </label><br/>

                    <label>
                        Email
                    <input type = 'email' value = {this.state.email} 
                           onChange = {this.handleInput} name = 'email'/>
                    </label><br/>
                    <label>
                        Password
                    <input type = 'password' value = {this.state.value}
                           onChange = {this.handleInput} name = 'password'/>
                    </label><br/>
                </form>
            </div>
        )
    }
}

export default UserLogin

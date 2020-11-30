import React, { Component } from 'react'
import {Form} from 'react-bootstrap' 
import {formGroup} from '../utils/formUtils'
import useForm from '../Hooks/useForm'
import {djangoFetch} from '../djangoUtils/djangoFetch' 
import {useHistory} from 'react-router-dom'
import {authContext} from '../contexts/AuthContext' 

export default function UserLogin() {
    var initialValues = {username: '', password: ''}
    const [value, setValue] = useForm(initialValues)    
    const [error, setError] = useState(initialValues)
    

    const loginEndpoint = '/api/accounts/login/'
    const history = useHistory()
    const [isLoggedIn, setIsLoggedIn] = authContext() 

    const submitHandler = (e) => {
        e.preventDefault() 
        djangoFetch({urlEndpoint:loginEndpoint, urlMethod: 'POST', sendData: value, 
        response_function: (response, status_code) => {
            if (status_code === 400){
                let errorValues = {'username': null, 'password': null}
                for (var key in response){
                    if (key in errorValues){
                        errorValues[key] = response[key]
                    }
                }
                setError(errorValues)
            }else {
                console.log(response) 
                localStorage.setItem('key', response.key)
                setIsLoggedIn(true)
                history.push('/')            
            }
        }})
    }

    return (
        <Form onSubmit = {submitHandler}>
            {formGroup('text', 'username', 'Username', value.username, setValue, error.username)}
            {formGroup('password', 'password', 'Password', value.password, setValue, error.password)}
        </Form>
    )
    
}

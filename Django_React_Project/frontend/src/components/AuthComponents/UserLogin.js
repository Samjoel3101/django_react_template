import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap' 
import {useHistory} from 'react-router-dom'

import {djangoFetch} from '../djangoUtils/djangoFetch' 
import {authContext} from '../contexts/AuthContext' 
import {formGroup, formAlerts} from '../utils/formUtils'
import useForm from '../Hooks/useForm'

export default function UserLogin() {
    var initialValues = {username: '', password: ''}
    const [value, setValue] = useForm(initialValues)    
    const [error, setError] = useState(null)
    

    const loginEndpoint = '/api/accounts/login/'
    const history = useHistory()
    const [isLoggedIn, setIsLoggedIn] = authContext() 

    const submitHandler = (e) => {
        e.preventDefault() 
        djangoFetch({urlEndpoint:loginEndpoint, urlMethod: 'POST', sendData: value, 
        response_function: (response, status_code) => {
            if (status_code === 400){
                setError(Object.values(response))
            }else {
                localStorage.setItem('key', response.key)
                setIsLoggedIn(true)
                history.push('/')            
            }
        }})
    }
    var components = null 
    if (error !== null){
        components = formAlerts(error.flat())
    }
    return (
        <Form onSubmit = {submitHandler}>
            {components}
            {formGroup('text', 'username', 'Username', value.username, setValue, null)}
            {formGroup('password', 'password', 'Password', value.password, setValue, null)}
            <Button type = 'submit'>
                Login
            </Button>
        </Form>
    )
    
}

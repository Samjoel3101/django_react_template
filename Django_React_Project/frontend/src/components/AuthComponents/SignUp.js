import React, {useState, useEffect} from 'react';
import {Cookies} from 'react-cookie';
import {Form, Button, Alert} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'; 

import useForm from '../Hooks/useForm';
import {formGroup} from '../utils/formUtils';
import {authContext} from '../contexts/AuthContext'; 

function SignUp() {
    const [isLoggedIn, setIsLoggedIn] = authContext() 
    const intialFormValues = {username:'', email: '', 
                              password: '', confirmPassword: ''}

    const initialErrorValues = {username: null, email: null, 
                                password1:null, password2:null}
    
    const history = useHistory();
    
    const [inputValues, inputChange] = useForm(intialFormValues);
    const [formError, setFormError] = useState(initialErrorValues);

    const onFormSubmit = (e)=> {
        e.preventDefault();
        const cookies = new Cookies();
        var passwordMismatch = false; 
        const mismatchMessage = 'Passwords do not match';    

        const registerEndpoint = '/api/accounts/register/'; 
        const data = {'username': inputValues.username, 
                      'email': inputValues.email, 
                      'password1': inputValues.password, 
                      'password2': inputValues.confirmPassword}; 
        
        if (data.password1 != data.password2){
            passwordMismatch = true;
        }
        var submissionFailure = false; 
        
        const lookUpOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                       'X-CSRFToken': cookies.get('csrftoken')},
            body: JSON.stringify(data),
        };

        fetch(registerEndpoint, lookUpOptions).then(
            response =>{
                if (response.status === 400){
                    submissionFailure = true; 
                }
                return response.json() 
            } 
            ).then(response => {
                if (submissionFailure){
                    let errorValues = {username: null, email: null, 
                        password1:null, password2:null}
                    for (var key in response){
                        if (key in errorValues){
                            errorValues[key] = response[key]
                        }   
                    }
                    if (passwordMismatch === false){
                        setFormError(errorValues)} 
                    else{
                        if (errorValues.password1 !== null){
                            errorValues.password1.push(mismatchMessage)
                        }else{
                            errorValues.password1 = [mismatchMessage]
                        }
                        setFormError(errorValues)
                    }
                }
                else{
                    setFormError(initialErrorValues)
                   localStorage.setItem('key', response.key)
                   localStorage.setItem('loggedIn', 'true') 
                   setIsLoggedIn(true)
                   alert('Registered Successfully')
                   history.push('/')
                }
            }).catch (errors => {
                console.log(errors)
            })
       
    };

    return (
        <div>
            <Form onSubmit = {onFormSubmit}>
                {formGroup('text', 'username', 'Username', inputValues.username, inputChange, formError.username)}
                {formGroup('email', 'email', 'Email Address', inputValues.email, inputChange, formError.email)}
                {formGroup('password', 'password', 'Password', inputValues.password, inputChange, formError.password1)}
                {formGroup('password', 'confirmPassword', 'Confirm Password', inputValues.confirmPassword, inputChange, formError.password2)}
                <Button type = 'submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp;

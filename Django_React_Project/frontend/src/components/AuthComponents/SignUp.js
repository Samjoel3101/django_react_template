import React from 'react';
import {Form} from 'react-bootstrap'; 
import useForm from '../Hooks/useForm';
import formGroup from '../utils/formUtils';

function SignUp() {
    const intialValues = {username:'', email: '', 
                          password: '', confirmPassword: ''}
    const [inputValues, inputChange] = useForm(intialValues) 
    return (
        <div>
            <Form>
                {formGroup('text', 'username', 'Username', inputValues.username, inputChange)}
                {formGroup('email', 'email', 'Email Address', inputValues.email, inputChange)}
                {formGroup('password', 'password', 'Password', inputValues.password, inputChange)}
                {formGroup('password', 'confirmPassword', 'Confirm Password', inputValues.confirmPassword, inputChange)}
            </Form>
        </div>
    )
}

export default SignUp;

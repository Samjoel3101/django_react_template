import React from 'react';
import {Form, Alert} from 'react-bootstrap';

function formAlerts(errors){
    if (errors !== null){
    return errors.map((value, index, arr) => {
        return (<Alert variant = 'danger'>
            {value}
        </Alert>)
    })
    }else {
        return null; 
    };  
}

function formGroup(fieldType, fieldName, labelText, inputValue, onChangeFunc, error){
    const alert_components = formAlerts(error)

    return (
    <Form.Group controlId={`formBasic${fieldType}`}>
        {alert_components}
        <Form.Label>{labelText}</Form.Label>
        <Form.Control type={fieldType} placeholder="" name = {fieldName} value = {inputValue} onChange = {onChangeFunc}/>
    </ Form.Group>)
}

export {formGroup, formAlerts};
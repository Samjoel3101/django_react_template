import React from 'react';
import {Form} from 'react-bootstrap';

function formGroup(fieldType, fieldName, labelText, inputValue, onChangeFunc){
    return (
    <Form.Group controlId={`formBasic${fieldType}`}>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control type={fieldType} placeholder="" name = {fieldName} value = {inputValue} onChange = {onChangeFunc}/>
    </ Form.Group>)
}

export default formGroup;
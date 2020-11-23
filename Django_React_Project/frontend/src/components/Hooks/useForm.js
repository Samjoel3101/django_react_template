import React, {useState} from 'react'; 

export default function UseForm(initialValues){
    const [values, setValues] = useState(initialValues);

    return [
        values, 
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
}
import React, {useState} from 'react'
import {cookie} from '../Cookie' 

export async function djangoFetch({urlEndpoint, sendData, urlMethod = 'GET', 
                            csrf = true, response_function = null}) {
    
    var status_code = null 
    const lookUpOptions = {
        method : urlMethod, 
        headers : {
            'Content-Type': 'application/json', 
        }, 
    }
    if (sendData !== null){
        lookUpOptions.body = JSON.stringify(sendData)
    }
    if (csrf){
        lookUpOptions.headers['X-CSRFToken'] = cookie.get('csrftoken')
    }
    console.log(lookUpOptions)

    return await fetch(urlEndpoint, lookUpOptions).then(response => {
        console.log(response)
        status_code = response.status
        return response.json() 
    }).then(
        response =>  {
            var result = response_function(response, status_code)
            return result 
        }
    )
}

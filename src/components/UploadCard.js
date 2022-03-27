import { Button } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'
import './UploadCard.css'
function UploadCard({id, name}) {
    
    const URL = 'https://kernelbackend.herokuapp.com/api/docs/'

    const del = async() =>{
        const options = {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        }

        const resp = await fetch(URL+id, options);
        const respData = await resp.json()

        alert(respData.message)

    }

    return (
        <div className='uploadCard'>
            <h2>{name}</h2>
            <Button className='logout' variant='contained' startIcon={<Delete />} onClick={del}>Delete</Button>
        </div>
    )
}

export default UploadCard

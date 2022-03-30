import { Button } from '@material-ui/core'
import { ArrowDownward, Delete } from '@material-ui/icons'
import React from 'react'
import './UploadCard.css'
function UploadCard({id, name, url}) {
    
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

    const download = async() =>{
        
        window.open(url)
    
    }

    return (
        <div className='uploadCard'>
            <h2>{name}</h2>
            <div className="operationBtns">
            <Button className='logout' variant='contained' startIcon={<Delete />} onClick={del}>Delete</Button>
            <Button variant='contained' startIcon={<ArrowDownward />} onClick={download}>Download</Button>
            </div>
        </div>
    )
}

export default UploadCard

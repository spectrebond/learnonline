import React, { useState } from 'react'
import { useEffect } from 'react';
import Header from './components/Header';
import UploadCard from './components/UploadCard';
import './Uploaded.css'
function Uploaded() {
    const [user, setUser] = useState("");
    const [docs, setDocs] = useState([]);
  
    useEffect(async()=>{
        const options = {
            headers: {
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }
        const DOCSURL = "https://kernelbackend.herokuapp.com/api/docs/";
        
            const resp = await fetch(DOCSURL,options);
            const respData = await resp.json();
            
            setDocs(respData);

    },[])
    console.log(docs);
    return (
        <div className='uploaded'>
             <div className="uploaded_top">
                <Header/>
            </div>
            <div className="uploaded_bottom">
                {
                    docs.map(doc => (
                        <UploadCard key={doc._id} name={doc.topic} id={doc._id} url={doc.docsUrl}/>
                    ))
                }  
            </div> 
            
        </div>
    )
}

export default Uploaded

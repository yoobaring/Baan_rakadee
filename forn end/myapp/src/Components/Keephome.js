import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Keephome =()=> {
    let url = 'https://newhome.sixgeat1997.now.sh/home'   
    const [myhome, setMyhome] = useState({})
   
    useEffect(()=>{
        getMyhome()
    },[])

    const getMyhome = async () => {
        const result = await axios.get(url)
        setMyhome(result.data)
        console.log(result.data)
    }

    const printKeephome = () => {
        if ( myhome && myhome.length )
            return myhome.map((keephome,index) => {
                return (
                    <li key={index}>
                       {keephome.id+1}. 
                       {keephome.name} 
                       : {keephome.description} 
                       : {keephome.tel} 
                       : {keephome.latitude} 
                       : {keephome.longitude} 
                       : {keephome.price} 
                       : {keephome.area}
                       : {keephome.type} 
                       : {keephome.category}

                    </li>
                )
             
            })
        else {
            return (<h2>No Keephome </h2>)
        }

    }

    return (
        <div >
           
                {printKeephome()}
          <br/>
        
        </div>
    )
  
 }

 export default Keephome;
 
 

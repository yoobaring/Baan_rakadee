import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Admin =()=> {
    let url = 'http://localhost:3001/home'   
    const [myhome, setMyhome] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [latitude, setLatitide] = useState('')
    const [longitude, setLongitude] = useState('')
    const [tel, setTel] = useState('')
    const [price, setPrice] = useState('')
    const [area, setArea] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')

    useEffect(()=>{
        getMyhome()
    },[])

    const getMyhome = async () => {
        const result = await axios.get(url)
        setMyhome(result.data)
        console.log(result.data)
    }

    const addAdmin = async () => {
        const result = await axios.post(url,{
            name,
            description,
            latitude,
            longitude,
            tel,
            price,
            area,
            type,
            category
        }) 
        getMyhome()
      
    }

    const getAdmin = async (id) => {
        const result = await axios.get(`http://localhost:3001/home/${id}`)
        setName(result.data.name)
        setDescription(result.data.description)
        setLatitide(result.data.latitude)
        setLongitude(result.data.longitude)
        setTel(result.data.tel)
        setPrice(result.data.price)
        setArea(result.data.area)
        setType(result.data.type)
        setCategory(result.data.category)
    } 



    const updateAdmin = async (id) => {
        const result = await axios.put(`http://localhost:3001/edit/${id}`,{
            name,
            description,
            latitude,
            longitude,
            tel,
            price,
            area,
            type,
            category

        })
        setName(result.data.name)
        setDescription(result.data.description)
        setLatitide(result.data.latitude)
        setLongitude(result.data.longitude)
        setTel(result.data.tel)
        setPrice(result.data.price)
        setArea(result.data.area)
        setType(result.data.type)
        setCategory(result.data.category)
        getMyhome()
    }

    const deleteAdmin = async (id) => {
        const result = await axios.delete(`http://localhost:3001/edit/${id}`)
        getMyhome()
    }   

    const printAdmin = () => {
        if ( myhome && myhome.length )
            return myhome.map((admin,index) => {
                return (
                    <li key={index}>
                       {admin.id+1}. {admin.name} : {admin.description} : {admin.tel} : {admin.latitude} :{admin.longitude} : {admin.price} : {admin.type} : {admin.category}
                        <br/><button onClick={ ()=> getAdmin(admin.id)}>GET</button>
                       <button onClick={ ()=> updateAdmin(admin.id)}>UPDATE</button> 
                       <button onClick={ ()=> deleteAdmin(admin.id)}>DELETE</button>

                    </li>
                )
             
            })
        else {
            return (<h2>No Keephome </h2>)
        }

    }

    return (
        <div >
           
                {printAdmin()}
          <br/>
            
           GET MY HOME : {name} {description} {tel} {latitude} {longitude} {price} {type} {area} {category} 

           <br/>
                <input 
                onChange={(e)=> setName(e.target.value)}
                type='text'
                value={name}
                name='name'
                placeholder='Enter name'
                /><br/>

                <input
                onChange={(e)=> setDescription(e.target.value)}
                type='text'
                value={description}
                name='description'
                placeholder='Enter description'
                /><br/>

                <input
                onChange={(e)=> setTel(e.target.value)}
                type='text'
                value={tel}
                name='tel'
                placeholder='Enter tel'
                /><br/>

                <input
                onChange={(e)=> setLatitide(e.target.value)}
                type='text'
                value={latitude}
                name='latitude'
                placeholder='Enter latitude'
                /><br/>
                
                <input
                onChange={(e)=> setLongitude(e.target.value)}
                type='text'
                value={longitude}
                name='longitude'
                placeholder='Enter longitude'
                /><br/>


                <input 
                onChange={(e)=> setPrice(e.target.value)}
                type='text'
                value={price}
                name='price'
                placeholder='Enter price'
                /><br/>

               <input 
                onChange={(e)=> setArea(e.target.value)}
                type='text'
                value={area}
                name='area'
                placeholder='Enter area'
                /><br/>

                <input 
                onChange={(e)=> setType(e.target.value)}
                type='text'
                value={type}
                name='type'
                placeholder='Enter type'
                /><br/>
                
                <input 
                onChange={(e)=> setCategory(e.target.value)}
                type='text'
                value={category}
                name='category'
                placeholder='Enter category'
                /><br/>

                 <button  onClick={addAdmin}>ADD MY HOME</button>  
        </div>
    )
  
 }

 export default Admin;
 
 

import React from 'react';
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const EditItemType = () => {
    const [itemType,setItemType] = useState({
	title:"",
	desc: "",
	price: null,
	cover: "",
    });

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.pathname.split("/")[2])
    const itemTypeName = location.pathname.split("/")[2]
    
    const handleClick = async e =>{
	e.preventDefault()
	try{
	    await axios.put("http://localhost:8080/ItemTypes/"+itemTypeName, itemType)
	    navigate("/ItemTypes")
	}
	catch(err){
	    console.log(err)
	}
	
    }
    const handleChange = (e) => {
	setItemType((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    console.log(itemType)
    return (
	<div className='form'>
	    <h1>Edit Item Type</h1>
		   
	    <input type="number" placeholder={itemType.unit_quantity} onChange={handleChange} name="unit_quantity"/>
	    <input type="checkbox" placeholder='' onChange={handleChange} name="perishhable"/>
	    <input type="text" placeholder={itemType.storage_type_name} onChange={handleChange} name="storage_type_name"/>
	
	    <button className="formButton" onClick={handleClick}>Update</button>
	</div>
    )
}

export default EditItemType

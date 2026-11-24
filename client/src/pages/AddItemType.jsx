import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddItemType = () => {
    const [ItemType,SetItemType] = useState({
	item_type_name:"",
	unit_quantity: null,
	perishable: "null",
	storage_type_name: ""
	
//expiration date?
    });

    const navigate = useNavigate()
    const handleClick = async e =>{
	e.preventDefault()
	try{
	    await axios.post("http://localhost:8080/ItemTypes", ItemType)
	    navigate("/ItemTypes")
	}
	catch(err){
	    console.log(err)
	}
	
    }
    const handleChange = (e) => {
	SetItemType((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    console.log(ItemType)
    
    return (
     	<div className='form'>
	    <h1>Add New Item Type</h1>
	    <input type="text" placeholder='type_name' onChange={handleChange} name="type_name"/>
	    <input type="number" placeholder='unit_quantity' onChange={handleChange} name="unit_quantity"/>
	    <input type="checkbox" placeholder='perishable' onChange={handleChange} name="perishable"/>
	    <input type="text" placeholder='storage_type_name' onChange={handleChange} name="storage_type_name"/>
	     <button className="formButton" onClick={handleClick}>Add</button>
	 </div>
	
    )
}
//expiration date
//replace storage_type_name with a dropdown, later
export default AddItemType


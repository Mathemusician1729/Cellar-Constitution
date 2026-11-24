import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddItem = () => {
    const [StoredItem, setStoredItem] = useState({
	item_type_name:"",
	quantity: null,
	date_received: null,
//expiration date?
    });

    const navigate = useNavigate()
    const handleClick = async e =>{
	e.preventDefault()
	try{
	    await axios.post("http://localhost:8080/inventory", StoredItem)
	    navigate("/")
	}
	catch(err){
	    console.log(err)
	}
	
    }
    const handleChange = (e) => {
	setStoredItem((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    console.log(StoredItem)
    return (
	<div className='form'>
	    <h1>Add New Item</h1>
	    <input type="number" placeholder='quantity' onChange={handleChange} name="quantity"/>
	    <button className="formButton" onClick={handleClick}>Add</button>
	</div>
	
    )
}

export default AddItem

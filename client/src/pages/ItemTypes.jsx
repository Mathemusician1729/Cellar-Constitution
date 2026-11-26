import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ItemTypes = () => {
    const [itemTypes, setItemTypes] = useState([])

    useEffect(()=>{
	const fetchAllItemTypes = async() =>{
	    try{
		const res = await axios.get("http://localhost:8080/ItemTypes")
		console.log(res)
		setItemTypes(res.data);
	    }catch(err){
		console.log(err)
	    }
	};
	fetchAllItemTypes();
    }, []);

    const handleDelete = async (type_name) =>{
	try{
	    await axios.delete("http://localhost:8080/ItemTypes/"+type_name)
	    window.location.reload()
	}catch(err){
	    console.log(err)
	}
    }
    
    return( 
    <div>
	 <h1>Item Types</h1>
	 <div className="itemTypes">
	     {itemTypes.map(item_type=>(
		 <div className="item_type" key={item_type.type_name}>
	      	    <h2>{item_type.type_name}</h2>
	      	    <p>{item_type.unit_quantity}</p>
	     	     <span>{item_type.storage_type_name}</span>
		     <button className="delete" onClick={()=>handleDelete(item_type.type_name)}>Delete</button>
		     <button className="edit"><Link to={`/EditItemType/${item_type.type_name}`}>Update</Link></button>
	 	</div>
	     ))}
	 </div>
	<button><Link to="/AddItemType">Add new item type</Link></button>
    </div> )	    
	     };

export default ItemTypes

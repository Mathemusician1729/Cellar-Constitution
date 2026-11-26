// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// const Inventory = () => {
//     const [inventory, setInventory] = useState([])

//     useEffect(()=>{
// 	const fetchAllStoredItems = async() =>{
// 	    try{
// 		const res = await axios.get("http://localhost:8080/books")
// 		console.log(res)
// 		setBooks(res.data);
// 	    }catch(err){
// 		console.log(err)
// 	    }
// 	};
// 	fetchAllBooks();
//     }, []);

//     const handleDelete = async (id) =>{
// 	try{
// 	    await axios.delete("http://localhost:8080/inventory/"+id)
// 	    window.location.reload()
// 	}catch(err){
// 	    console.log(err)
// 	}
//     }
    
//     return( 
//     <div>
// 	 <h1>Inventory</h1>
// 	 <div className="inventory">
// 	     {books.map(book=>(
// 		 <div className="stored_item" key={stored_item.id}>
// 	      	    <h2>{stored_item.item_name}</h2>
// 	      	    <p>{stored_item.batch_id}</p>
// 	     	     <span>{stored_item.storage_name}</span>
// 		     <button className="delete" onClick={()=>handleDelete(stored_item.batch_id)}>Delete</button>
// 		     <button className="edit"><Link to={`/edit_item/${stored_item.batch_id}`}>Update</Link></button>
// 	 	</div>
// 	     ))}
// 	 </div>
// 	<button><Link to="/AddItem">Add new item</Link></button>
//     </div> )	    
// 	     };

// export default Inventory

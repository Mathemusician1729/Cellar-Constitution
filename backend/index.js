import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"changeme",
    database:"cellar_constitution_db"
})

// display inventory
app.get("/Inventory", (req,res)=>{
    const q = "SELECT * FROM stored_item"
    db.query(q,(err,data)=>{
	if(err) return res.json(err)
	return res.json(data)
    })
})


// display item types
app.get("/ItemTypes", (req,res)=>{
    const q = "SELECT * FROM item_type"
    db.query(q,(err,data)=>{
	if(err) return res.json(err)
	return res.json(data)
    })
})


// add item type
app.post("/ItemTypes", (req, res)=>{
    const q = "INSERT INTO item_type (`type_name`, `unit_quantity`, perishable, storage_type_name) VALUES (?)"
    //const q = "INSERT INTO item_type (type_name, unit_quantity, perishable) VALUES ('n', 2, false)"
    //nutrition values?
    const values = [
	req.body.type_name,
	req.body.unit_quantity,
	(req.body.perishable == "on") ? true : false,
	(req.body.storage_type_name == "") ? null : req.body.storage_type_name
    ]

    db.query(q,[values], (err,data)=>{
	if(err) return res.json(err)
	return res.json("Item type added successfully.")
    })
})

// delete item type
app.delete("/ItemTypes/:type_name", (req, res)=>{
    const type_name = req.params.type_name;
    const q =  "DELETE FROM item_type WHERE type_name = ?"

    db.query(q,[type_name], (err,data)=>{
	if(err) return res.json(err)
	return res.json("Item Type deleted successfully.")
    })
})

// edit item type
app.put("/ItemTypes/:type_name", (req, res)=>{
    const type_name = req.params.type_name;
    const q =  "UPDATE item_type SET `unit_quantity`=?, `perishable`=?, `storage_type_name`=? WHERE type_name = ?";

    const values=[
	req.body.unit_quantity,
	(req.body.perishable == "on") ? true : false,
	(req.body.storage_type_name == "") ? null : req.body.storage_type_name
    ]

    db.query(q,[...values,type_name], (err,data)=>{
	if(err) return res.json(err)
	return res.json("Item Type updated successfully.")
    })
})

// display admin calendar
// add volunteer shift
// edit volunteer shift
// remove volunteer shift

// display volunteer tasks
// add volunteer task
// edit volunteer task
// remove volunteer task

app.listen(8080, ()=>{
    console.log("Connected to backend")
})

// // test database connection
// db.connect((err) => {if (err) {console.error("DB connection failed"), err.code, err.message} console.log('connected to database successfully')})

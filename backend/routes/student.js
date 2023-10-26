const router = require("express").Router();
const express = require("express")
const mysql = require('mysql')


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Auth@01234",
    database:"stud_dat",
})

router.use(express.json())
// router.use(cors())

// * Get method

router.get('/', (req, res) => {
    const q = 'SELECT * FROM students;'

    db.query(q,(err, data)=> {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// * Post method

router.post('/', (req, res) => {
    const q = "INSERT INTO students (`first_name`, `surname`,`gender`, `class`, `age`) VALUES (?)"
    const values = [req.body.first_name, req.body.surname, req.body.gender, req.body.class, req.body.age]
    
    // console.log(res)
    db.query(q, [values], (err, data)=> {
        if (err) return res.json(err)
        return res.status(201).json({message: "Created succesfully", data: data})
    })
})

// * Delete method

router.delete('/:id', (req, res) => {
    const studID = req.params.id
    const q = 'DELETE FROM students WHERE id = ?'

    db.query(q, [studID], (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json({message: "Created succesfully", data: data})
    })
})

// * Update method

router.put('/:id', (req, res) => {
    const studID = req.params.id
    const q = 'UPDATE students SET `first_name` = ?, `surname` = ?, `gender` = ?, `class` = ?, `age` = ? WHERE id = ?'
    const values = [req.body.first_name, req.body.surname, req.body.gender, req.body.class, req.body.age]

    db.query(q, [...values, studID], (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json({message: "Updated succesfully", data: data})
    })
})

module.exports = router
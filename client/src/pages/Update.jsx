import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const [student, setStudent] = useState({
    first_name:'',
    surname:'',
    class:'',
    dob: '',
    gender:'',
    picture:'',
  })

  const navigate = useNavigate()
  const location = useLocation()


  const studID = location.pathname.split('/')[2]


  const handleChange = e => {
    setStudent(prev=>({...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put('http://localhost:5000/students/' + studID, student)
      console.log(student)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  
  // console.log(student)
  return (
    <div className="form">
      <h1>Update student info</h1>
      <input type="text" name="first_name" onChange={handleChange} placeholder='First Name' />
      <input type="text" name="surname" onChange={handleChange} placeholder='Surname' />
      <input type="text" name="class" onChange={handleChange} placeholder='Class' />
      <input type="text" name="age" onChange={handleChange} placeholder='Age' />
      <input type="text" name="gender" onChange={handleChange} placeholder='Gender' />
      {/* <input type="text" name="picture" onChange={handleChange} placeholder='Picture' /> */}
      <button className='form-btn' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update
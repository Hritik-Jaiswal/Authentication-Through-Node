import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Card = ({ post }) => {
  const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchAllStud = async () => {
            try{
                const res = await axios.get('http://localhost:5000/students')
                console.log(res.data)
                setStudents(res.data)
                console.log(res)
            }catch(err) {
                console.log(err)
            }
        }
        fetchAllStud()
    },[])

    const handleClick = async (id) => {
        try {
            await axios.delete('http://localhost:5000/students/'+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
  
  return (
    <div className="students-container">
    {students.map(student => (
        <div className="student-container card" key={student.id}>
            { student.picture && <img src={student.picture} alt=''/> }
            <h2>{student.first_name} {student.surname}</h2>
            <div className="desc">
              <p>Class:-{student.class}</p>
              <p>Age:- {student.age}</p>
              <p>{student.gender}</p>
            </div>
            <button className="cardButton" onClick={() => handleClick(student.id)}>Delete</button>
            <button className="cardButton"><Link className='link' to={`/update/${student.id}`}>Update</Link></button>
        </div>
    ))}
</div>
  );
};

export default Card;

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'


const Home = () => {
    
    
    return (
        <div className='home'>
            <h1>Student Informataion Database</h1>
            <Card />
            <button className='form-btn'>
                <Link className='link-add' to={'/add'}>Add a student info</Link>
            </button>
        </div>
    )
}

export default Home
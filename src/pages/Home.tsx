import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='homepage'>
      <div className='homepage__content'>
        <Link to={'/restaurants'}>
        <h2 className='homepage__content__title'>Beställ nu!</h2>
        </Link>
      </div>
    </div>
  )
}

export default Home
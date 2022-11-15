import React from 'react'

export default function Header() {
  return (
    <header className='Header'>
      <div className='text'>
        <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <input type="text" placeholder='Search for location'/>
        <button>Search</button>
      </div>
      <div className='image--grid'>
        <img src='Image/Group 4028.svg' alt='grid of four NFTs'/>
      </div>
    </header>
  )
}

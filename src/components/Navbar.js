import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

export default function Navbar() {
    const[showModal, setShowModal] = React.useState(false)
    const[showNav, setShowNav] = React.useState(false)

    const handleClick = () =>{
        setShowModal(true)
        setShowNav(false)
    }

    const handleNav = () =>{
        setShowNav(prev => !prev)
    }
    return (
    <nav>
        <div className='img-div'>
            <div>
                <img src='Image/house-logo.svg' alt='illustration of a house with a linear gradient of pink to purple used as color'/>
            </div>
            <div>
                <img src='Image/meta-logo.svg' alt='the letters Metabnb spelled out to represent the logo with the linear gradient from pink to purple used as color'/>
            </div>
        </div>
        <div className='list--items'>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/places">
                <li>Place to Stay</li>
            </Link>
            <li>NFTs</li>
            <li>Community</li>
        </div>
        <div onClick={handleClick} className='button-div'>
            <button>Connect wallet</button>
        </div>
        <div className='hamburger-div' onClick={handleNav}>
            <img src='Image/bars-solid.svg' className='hamburger' alt='the bars laid on top on one another horizontally representing the hamburger logo'/>
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
        {showNav && <div className='mobile--nav'>
            <div className='lst--items'>
                <li>Home</li>
                <Link to="/places">
                    <li>Place to Stay</li>
               </Link>
                <li>NFTs</li>
                <li>Community</li>
            </div>
            <div onClick={handleClick} className='buton-div'>
                <button>Connect wallet</button>
            </div>
        </div>}
    </nav>
  )
}

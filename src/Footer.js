import React from 'react'

export default function Footer() {
  return (
    <div className='Footer'>
        <section className='footer-images'>
            <div className='img-div'>
                <div>
                    <img src='Image/house-logo.svg' alt='illustration of a house with a linear gradient of pink to purple used as color'/>
                </div>
                <div>
                    <img src='Image/meta-logo.svg' alt='the letters Metabnb spelled out to represent the logo with the linear gradient from pink to purple used as color'/>
                </div>
            </div>
            <div className='icons'>
                <img src='Image/facebook.svg' alt='the letter f representing the facebook logo'/>
                <img src='Image/instagram.svg' alt='a bunch of rounded boxes representing the instagram logo'/>
                <img src='Image/twitter-logo.svg' alt='a bird representing the twitter logo'/>
            </div>
        </section>
        <ul>
            <li style={{fontWeight: 700, fontSize: '1.125rem'}}>Community</li>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
        </ul>
        <ul>
            <li style={{fontWeight: 700, fontSize: '1.125rem'}}>Places</li>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
        </ul>
        <ul>
            <li style={{fontWeight: 700, fontSize: '1.125rem'}}>About us</li>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
        </ul>
        <p>&copy; 2022 Metabnb</p>
    </div>
  )
}

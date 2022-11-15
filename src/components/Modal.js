import React from 'react'

export default function Modal({onClose}) {
    return (
    <div className='overlay'>
        <div className='Modal'>
       <div className='flex connect'>
            <h3>Connect Wallet</h3>
            <img src='Image/close.svg' onClick={onClose} style={{cursor: 'pointer'}}/>
        </div> 
        <hr/>
        <div style={{padding: '0 2rem'}}>
            <p>Choose your preferred wallet:</p>
            <div className='flex wallet--choice'>
            <aside style={{display: 'flex'}}>
                <img src='Image/metamask.svg'/>
                <p>Metamask</p>
            </aside>
            <aside>
                <img src='Image/right-arrow.svg'/>
            </aside>
            </div>
            <div className='flex wallet--choice'>
                <aside style={{display: 'flex'}}>
                    <img src='Image/wallet.svg'/>
                    <p>WalletConnect</p>
                </aside>
                <aside>
                    <img src='Image/right-arrow.svg'/>
            </aside>
            </div> 
        </div>
    </div>
    </div>
    )
}



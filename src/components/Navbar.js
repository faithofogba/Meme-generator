import React from 'react';
import Troll from '../images/troll-face.png'

export default function Navbar() {
  return (
    <nav className='nav'>
        <img src={Troll} className='nav--logo'/>
        <h2 className='nav--header'>Meme Generator</h2>
        <h3 className='nav--title'>React Course - Project 3</h3>
    </nav>
  )
}

 
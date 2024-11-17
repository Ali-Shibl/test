import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from'./Navbar.module.css'
export default function Navbar() {


const [showNavbaer, setshowNavbaer] = useState(true)

function checkNav() {
  setshowNavbaer(!showNavbaer)
}

  return (
    <>
  


    
    
    
    <nav className=" bg-dark mb-4 py-4 ">
    <div className='container d-flex flex-column flex-lg-row justify-content-between align-items-center '>
    
      <div className='d-flex justify-content-between w-100'>
        <p className='text-white mb-0'>Logo</p>
        <div className={`${style.divspan} text-white mb-0 d-flex flex-column row-gap-2 d-lg-none`} onClick={checkNav}>
            <span className={`${style.span}  ${showNavbaer?style.one:''}` }></span>
            <span className={`${style.span}${showNavbaer?style.two:''}` }></span>
            <span className={`${style.span} ${showNavbaer?style.three:''}` }></span>
        </div>
      </div>
      {showNavbaer&&
      <ul className='d-flex flex-column   flex-lg-row align-items-center list-unstyled gap-3 mb-0 mt-lg-0 mt-3'>
        <li className={'nav-item'}><NavLink className={'nav-link text-white'} to={'home'}>home</NavLink></li>
        <li className={'nav-item'}><NavLink className={'nav-link text-white'}>Products</NavLink></li>
        <li className={'nav-item'}><NavLink className={'nav-link text-white'}>Cart</NavLink></li>
        <li className={'nav-item'}><NavLink className={'nav-link text-white'}>Fav</NavLink></li>
      </ul>}
      </div>
</nav>


</> )
}

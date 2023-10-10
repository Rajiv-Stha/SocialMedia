import React from 'react'
import styles from "./navbar.module.css"
import {BiSearch} from "react-icons/bi"
import {BiLogoDigitalocean} from "react-icons/bi"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.leftContent}>
      <Link to={"/"} className={styles.linkToHomepage}>

       
      <BiLogoDigitalocean className={styles.icons}/>
            <h2 className={styles.logoName}>Media</h2>
      </Link>
          
      
      </div>
      <div className={styles.rightContent}>
        <BiSearch className={styles.icons}/>
        <img src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg' alt='avatar' />
      </div>
    </div>
  )
}

export default Navbar

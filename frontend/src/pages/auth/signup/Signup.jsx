import React from 'react'
import {BiLogoDigitalocean} from "react-icons/bi"
import styles from "../Auth.module.css"

const Signup = () => {
  return (
    <div className={styles.auth_container}>
    <div className={styles.auth_innerContent}>

    <div className={styles.logo_header}>
    <BiLogoDigitalocean/>
    <h2>Media</h2>
    </div>
    <form className={styles.signup_form}>

    <input type='text' placeholder='Enter username'/>
    <input type='text' placeholder='Enter email'/>

    <div className={styles.password_box}>

    <input type='password' placeholder='Enter your password'/>
    <input type='password' placeholder='Confirm your password'/>
    </div>
    <input type='text' placeholder='Enter job'/>
    <button type='submit' className={styles.login_btn}>Log in</button>
    </form>
      
    </div>
    </div>
  )
}

export default Signup

import React from 'react'
import {BiLogoDigitalocean} from "react-icons/bi"
import styles from "../Auth.module.css"
const Login = () => {
  return (
    <div className={styles.auth_container}>
    <div className={styles.auth_innerContent}>

    <div className={styles.logo_header}>
    <BiLogoDigitalocean/>
    <h2>Media</h2>
    </div>
    <form className={styles.login_form}>
    <input type='text' placeholder='Enter your email'/>
    <input type='password' placeholder='Enter your password'/>
    <button type='submit' className={styles.login_btn}>Log in</button>
    </form>
      
    </div>
    </div>
  )
}

export default Login

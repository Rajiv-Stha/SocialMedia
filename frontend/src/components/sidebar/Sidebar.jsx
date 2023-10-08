import React from 'react'
import styles from "./sidebar.module.css"
import {AiOutlineHome} from "react-icons/ai"
import {FaUserFriends} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {AiOutlineSetting} from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className={styles.sidebar_wrapper}>
      <div className={styles.profile_section}>
        <img src='https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121230370-stock-illustration-female-default-avatar-gray-profile.jpg' alt='profile' className={styles.avatar} />
        <div className={styles.profile_detail}>
          <h3>Rajiv shrestha</h3>
          <p>rajiv@gmail.com</p>
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <button>
          <AiOutlineHome className={styles.btn_icons}/>
         <p>Home</p>
        </button>
        <button>
        <FaUserFriends className={styles.btn_icons}/>
          <p>Friend</p>
        </button>
        <button>
        <CgProfile className={styles.btn_icons}/>
          <p>Profile</p>
        </button>
        <button>
        <AiOutlineSetting className={styles.btn_icons}/>
          <p>Settings</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar

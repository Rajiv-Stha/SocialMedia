import React from 'react'
import styles from "./profile.module.css"
import Navbar from '../../components/navbar/Navbar'
import {MdEdit} from "react-icons/md"

const Profile = () => {
  return (
    <>
<Navbar/>
    <div className={styles.profile_container}> 
    <div className={styles.profileInfo_content}>
      <div className={styles.coverImg_wrapper}>
        <img src='https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='coverImg' className={styles.coverImg}/>
      </div>
      <div className={styles.profileDetail_wrapper}>
        <div className={styles.profileDetail_leftContent}>
          <img src='https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='profileImg' className={styles.profileImg}/>
          <div className={styles.profile_info}>
            <h2>Rajiv Shrestha</h2>
            <p>2333 friends</p>
          </div>
        </div>
        <div className={styles.profileDetail_rightContent}>

          <button>
          <MdEdit/>
            <p>Edit Profile</p>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Profile

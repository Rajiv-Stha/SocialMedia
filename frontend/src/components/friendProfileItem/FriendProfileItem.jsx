import React from 'react'
import styles from "./friendprofileitem.module.css"

const FriendProfileItem = () => {
  return (
    <div className={styles.profileFriend_imageBox}>

    <img src='https://images.pexels.com/photos/17035575/pexels-photo-17035575/free-photo-of-calla-lily-in-droplets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='img' className={styles.friendImage}/>
    <p>rajiv shrestha</p>
</div>
  )
}

export default FriendProfileItem

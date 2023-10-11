import React from 'react'
import styles from "./profilefriendbox.module.css"
import FriendProfileItem from '../friendProfileItem/FriendProfileItem'

const ProfileFriendBox = () => {
  return (
    <div className={styles.profileFriend_Box}>
    <div className={styles.profileFriend_header}>
    <div className={styles.header_left}>

        <h3>Photos</h3>
        <p>369 friends</p>
    </div>

        <p>See All Photos</p>
    </div>
   
    <div className={styles.profileFriend_imageWrapper}>
   <FriendProfileItem/>
   <FriendProfileItem/>
    

      
    </div>
      
    </div>
  )
}

export default ProfileFriendBox

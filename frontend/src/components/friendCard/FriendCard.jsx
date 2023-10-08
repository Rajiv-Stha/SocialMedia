import React from 'react'
import styles from "./friendcard.module.css"

const FriendCard = () => {
  return (
    <div className={styles.friendCard}>
    <img src='https://images.pexels.com/photos/18530730/pexels-photo-18530730/free-photo-of-red-haired-girl-in-a-black-vintage-dress-with-grapes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='user' className={styles.userImg}/>
    <p className={styles.username}>Santosh Kunwar</p>
      
    </div>
  )
}

export default FriendCard

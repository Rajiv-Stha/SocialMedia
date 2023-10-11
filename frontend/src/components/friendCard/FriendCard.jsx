import React from 'react'
import styles from "./friendcard.module.css"
import { Link } from 'react-router-dom'

const FriendCard = () => {
  return (
    
    <Link to={"/profile"} className={styles.friendCard}>
    <img src='https://images.pexels.com/photos/18530730/pexels-photo-18530730/free-photo-of-red-haired-girl-in-a-black-vintage-dress-with-grapes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='user' className={styles.userImg}/>
    <p className={styles.username}>Santosh Kunwar</p>
      
    </Link>
  )
}

export default FriendCard

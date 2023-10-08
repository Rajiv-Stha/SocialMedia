import React from 'react'
import styles from "./friendlist.module.css"
import {BiSearch} from "react-icons/bi"
import FriendCard from '../friendCard/FriendCard'

const FriendList = () => {
  return (
    <div className={styles.friendlist_wrapper}>
    <div className={styles.inputWrapper}>
    <BiSearch className={styles.searchIcon}/>
        <input type="text" placeholder="Search friends" className={styles.searchInput}/>
    </div>
    <p className={styles.friendList_header}>Friends</p>   
    <div className={styles.friendCard_container}>
        <FriendCard/>
        <FriendCard/>
        <FriendCard/>
        <FriendCard/>
    </div>   
    </div>
  )
}

export default FriendList

import React from 'react'
import styles from "./homepage.module.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import CreatePost from '../../components/createPost/CreatePost'
import PostCard from '../../components/postCard/PostCard'
import FriendList from '../../components/friendList/FriendList'

const Homepage = () => {
  return (
    <div className={styles.homepage_container}>
      <Navbar/>
      <hr/>
      <div className={styles.hero_section}>
      <div className={styles.sidebar_container}>
        <Sidebar/>
      </div>
      <div className={styles.hero_mainBox}>
        <CreatePost/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
      <div className={styles.friendList_Box}>
        <FriendList/>
      </div>
      </div>
    </div>
  )
}

export default Homepage

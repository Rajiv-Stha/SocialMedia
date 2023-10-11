import React from 'react'
import styles from "./profilepostbox.module.css"
import CreatePost from '../createPost/CreatePost'
import PostCard from '../postCard/PostCard'

const ProfilePostBox = () => {
  return (
    <div className={styles.ProfilePost_Box}>
    <CreatePost/>
    <PostCard/>
    <PostCard/>
    </div>
  )
}

export default ProfilePostBox

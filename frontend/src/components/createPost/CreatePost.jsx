import React from 'react'
import styles from "./createpost.module.css"
import {ImAttachment} from "react-icons/im"

const CreatePost = () => {
  return (
    <div className={styles.createPost_Wrapper}>
      <h2>Let's make a new Post !</h2>
      <hr/>
      <div className={styles.post_content}>
        <div className={styles.text_post}>
            <img src='https://previews.123rf.com/images/meysye/meysye1904/meysye190400002/121250278-female-silhoutte-avatar-default-avatar-profile-picture-photo-placeholder.jpg' alt='profile' className={styles.avatar}/>
            <input type='text' placeholder="How's your day going?"/>
        </div>
        <ImAttachment className={styles.attachmentIcon}/>
      </div>
    </div>
  )
}

export default CreatePost

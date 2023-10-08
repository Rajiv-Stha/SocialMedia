import React from 'react'
import styles from "./postcard.module.css"
import {FiMoreHorizontal} from "react-icons/fi"
import {AiOutlineLike} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {PiShareFat} from "react-icons/pi"

const PostCard = () => {
  return (
    <div className={styles.postCard_box}>
      <div className={styles.postCard_top}>
        <div className={styles.postCard_topLeft}>
        <img src='https://previews.123rf.com/images/meysye/meysye1904/meysye190400002/121250278-female-silhoutte-avatar-default-avatar-profile-picture-photo-placeholder.jpg' alt='avatar'/>
        <div>
            <h3>Rajiv shrestha</h3>
            <p>designer</p>
        </div>
        </div>
        <FiMoreHorizontal/>
      </div>
      <hr/>
      <div className={styles.postCard_middle}>
      <p className={styles.status}>Hello this is post okay bye halka ramailo</p>
      <div className={styles.post_imgWrapper}>

      <img src='https://images.pexels.com/photos/18536298/pexels-photo-18536298/free-photo-of-sonbahar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='post' className={styles.postImg}/>
      {/* <img src='https://images.pexels.com/photos/6844476/pexels-photo-6844476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='post' className={styles.postImg}/> */}
      </div>
      </div>
      <hr/>
      <div className={styles.postCard_btnWrappers}>
        <button className={styles.postReact_btn}>
          <AiOutlineLike className={styles.reaction_icons}/>
          <p>Like</p>
        </button>
        <button className={styles.postReact_btn}>
          <FaRegComment className={styles.reaction_icons}/>
          <p>Comment</p>
        </button>
        <button className={styles.postReact_btn}>
          <PiShareFat className={styles.reaction_icons}/>
          <p>Share</p>

        </button>
      </div>
    </div>
  )
}

export default PostCard

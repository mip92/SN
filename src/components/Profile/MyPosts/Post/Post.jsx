import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://s00.yaplakal.com/pics/pics_preview/7/2/9/14733927.jpg' />
        {props.message}
        <div>
        <span>Like</span> {props.like}
        </div>
    </div>)
}
export default Post;
import React from 'react'
import { Link } from 'react-router-dom'
import { LanderOne } from '../../resources'
import styles from './BlogCard.module.css'

const BlogCard = () => {
  return (
    <Link to="" className={`${styles.BlogCard}`}>
<div className={`${styles.blogImage}`}>
    <img src={LanderOne} alt="" />
</div>
<div className={`${styles.blogContent}`}>
<p className={`${styles.blogDate}`}>26 oct 2022</p>
<h3 className={`${styles.blogTitle}`}>School resumptions</h3>
<p className={`${styles.blogDescription}`}>The resumptions of lectures will take place from the .....</p>

<button className={`${styles.blogButton}`}>Read More</button>
</div>
    </Link>
  )
}

export default BlogCard
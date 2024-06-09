import React from 'react'
import styles from './posts.module.css'
import Pagination from '../pagination/Pagination'

const Posts = () => {
  return (
    <div className={styles.container}>Posts
      <Pagination/>
    </div>
  )
}

export default Posts
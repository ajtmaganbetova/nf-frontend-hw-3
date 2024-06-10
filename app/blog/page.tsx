import React from 'react'
import styles from "./blogPage.module.css"
import Posts from '@/components/posts/Posts'
import Hero from '@/components/hero/hero'

export default function Blog() {
  return (
    <div className={styles.container}>
        <Hero name="Blog"/>
        <Posts />
    </div>
  )
}


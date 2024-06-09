"use client"

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const theme = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={theme?.toggle}>
      <div className={styles.ball}></div>
    </div>

  )
  
}

export default ThemeToggle
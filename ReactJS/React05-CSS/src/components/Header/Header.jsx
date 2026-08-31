import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      This is a header
      <button>Login</button>
    </div>
  )
}

export default Header

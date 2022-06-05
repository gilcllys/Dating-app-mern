import React from 'react'
import styles from './Header.module.css'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import { IconButton } from '@mui/material'


const Header = () => {
  return (
    <div className={styles.header}>
        <IconButton>
            <PersonIcon fontSize='large' className={styles.headerIcon} />
        </IconButton>
        <img className={styles.headerLogo} src="../../src/Assets/logo192.png" alt="REACT" />
        <IconButton>
            <ForumIcon fontSize='large' className={styles.headerIcon} />
        </IconButton>
    </div>
  )
}

export default Header
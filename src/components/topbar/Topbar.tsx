import React, { FC } from 'react';
import styles from './Topbar.module.scss';
import Person from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';

interface TopbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
 }

const Topbar: FC<TopbarProps> = ({menuOpen, setMenuOpen}) => (
  <div className={[styles.topbar, (menuOpen && styles.active)].join(" ")}>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <a href="#intro" className={styles.logo}>Joris</a>
        <div className={styles.itemContainer}>
          <Person className={styles.icon}></Person>
          <span><a href="tel:+310621228884">06-21228884</a></span>
        </div>
        <div className={styles.itemContainer}>
          <Mail className={styles.icon}></Mail>
          <span><a href="mailto:jorispaarde@gmail.com">jorispaarde@gmail.com</a></span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.hamburger} onClick={()=>setMenuOpen(!menuOpen)}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;

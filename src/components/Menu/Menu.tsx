import React, { FC } from 'react';
import styles from './Menu.module.scss';

interface MenuProps { 
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: FC<MenuProps> = ({menuOpen, setMenuOpen}) => (
  <div className={[styles.Menu, (menuOpen && styles.active)].join(" ")}>
    <ul>
      <li>
        <a href="#intro" onClick={()=>setMenuOpen(!menuOpen)}>Home</a>
      </li> 
      <li>
        <a href="#portfolio" onClick={()=>setMenuOpen(!menuOpen)}>Portfolio</a>
      </li>
      <li>
        <a href="#works" onClick={()=>setMenuOpen(!menuOpen)}>Works</a>
      </li>
      <li>
        <a href="#testimonials" onClick={()=>setMenuOpen(!menuOpen)}>Testimonials</a>
      </li> 
      <li>
        <a href="#contact" onClick={()=>setMenuOpen(!menuOpen)}>Contact</a>
      </li>
    </ul>
  </div>
);

export default Menu;

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
        <a href="#intro" onClick={()=>setMenuOpen(false)}>Home</a>
      </li> 
      <li>
        <a href="#portfolio" onClick={()=>setMenuOpen(false)}>Portfolio</a>
      </li>
      <li>
        <a href="#works" onClick={()=>setMenuOpen(false)}>Works</a>
      </li>
      <li>
        <a href="#testimonials" onClick={()=>setMenuOpen(false)}>Testimonials</a>
      </li> 
      <li>
        <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
      </li>
    </ul>
  </div>
);

export default Menu;

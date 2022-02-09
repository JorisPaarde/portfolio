import React, { FC } from 'react';
import styles from './Topbar.module.scss';

interface TopbarProps {}

const Topbar: FC<TopbarProps> = () => (
  <div className={styles.Topbar}>
    Topbar Component
  </div>
);

export default Topbar;

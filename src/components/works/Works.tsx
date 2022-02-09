import React, { FC } from 'react';
import styles from './Works.module.scss';

interface WorksProps {}

const Works: FC<WorksProps> = () => (
  <div className={styles.Works}>
    Works Component
  </div>
);

export default Works;

import React, { FC } from 'react';
import styles from './Intro.module.scss';

interface IntroProps {}

const Intro: FC<IntroProps> = () => (
  <div className={styles.Intro} id="intro">
    Intro Component
  </div>
);

export default Intro;

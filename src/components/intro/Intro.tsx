import React, { FC, useEffect, useRef } from 'react';
import styles from './Intro.module.scss';
import { init } from 'ityped'

interface IntroProps { }

const Intro: FC<IntroProps> = ({ }) => {

  const textRef = useRef();

  useEffect(() => init(textRef.current, {
    showCursor: true,
    backDelay: 1500,
    backSpeed: 60,
    cursorChar: ".",
    strings: ['Developer', 'Designer', 'Content Creator'],
  })
    , []);


  return (
    <div className={styles.Intro} id="intro">
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src="assets\man.png" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2>Hoi ik ben</h2>
          <h1>Joris Paardekooper</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="\assets\down.png" alt="" />
        </a>
      </div>
    </div>
  )
};




export default Intro;

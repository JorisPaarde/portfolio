import React, { FC } from 'react';
import styles from './Portfolio.module.scss';

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => (
  <div className={styles.Portfolio} id="portfolio">
    Portfolio Component
  </div>
);

export default Portfolio;

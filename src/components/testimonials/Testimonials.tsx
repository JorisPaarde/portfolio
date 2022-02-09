import React, { FC } from 'react';
import styles from './Testimonials.module.scss';

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = () => (
  <div className={styles.Testimonials}>
    Testimonials Component
  </div>
);

export default Testimonials;

import React, { FC } from 'react';
import styles from './Testimonials.module.scss';

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = () => (
  <div className={styles.Testimonials} id="testimonials">
    Testimonials Component
  </div>
);

export default Testimonials;

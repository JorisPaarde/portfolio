import React, { lazy, Suspense } from 'react';

const LazyTestimonials = lazy(() => import('./Testimonials'));

const Testimonials = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTestimonials {...props} />
  </Suspense>
);

export default Testimonials;

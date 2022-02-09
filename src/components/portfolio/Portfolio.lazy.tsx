import React, { lazy, Suspense } from 'react';

const LazyPortfolio = lazy(() => import('./Portfolio'));

const Portfolio = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPortfolio {...props} />
  </Suspense>
);

export default Portfolio;

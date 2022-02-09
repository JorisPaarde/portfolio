import React, { lazy, Suspense } from 'react';

const LazyWorks = lazy(() => import('./Works'));

const Works = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWorks {...props} />
  </Suspense>
);

export default Works;

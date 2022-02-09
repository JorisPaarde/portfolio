import React, { lazy, Suspense } from 'react';

const LazyTopbar = lazy(() => import('./Topbar'));

const Topbar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTopbar {...props} />
  </Suspense>
);

export default Topbar;

/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line react/prop-types
function LinkRouter({
  children,
  href,
  queryName,
  ...props
}) {
  return (
    <Link href={{ pathname: href, query: { name: queryName } }} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>{children}</a>
    </Link>
  );
}
export default LinkRouter;

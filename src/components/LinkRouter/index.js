/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line react/prop-types
function LinkRouter({ children, href, ...props }) {
  return (
    <Link href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>{children}</a>
    </Link>
  );
}
export default LinkRouter;

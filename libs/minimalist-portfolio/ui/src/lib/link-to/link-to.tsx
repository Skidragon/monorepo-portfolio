import Link, { LinkProps } from 'next/link';
/* eslint-disable-next-line */

export interface LinkToProps extends LinkProps {
  children: React.ReactNode;
}

export function LinkTo({ children, ...props }: LinkToProps) {
  return (
    <Link {...props} passHref>
      <a href="replace">{children}</a>
    </Link>
  );
}

export default LinkTo;

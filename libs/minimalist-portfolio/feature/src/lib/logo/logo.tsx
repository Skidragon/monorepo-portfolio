import { SVGProps } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LogoProps extends SVGProps<SVGSVGElement> {}

const StyledLogo = styled.div``;

export function Logo({ fill = '#33323D', ...props }: LogoProps) {
  return (
    <StyledLogo>
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32" {...props}>
        <path
          fill={fill}
          fill-rule="evenodd"
          d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
        />
      </svg>
    </StyledLogo>
  );
}

export default Logo;

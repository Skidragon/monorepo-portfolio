import styled from 'styled-components';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface AvatarProps {
  src: string;
  firstName: string;
  lastName: string;
  getInitials?: (firstName: string, lastName: string) => string;
  background?: string;
  color?: string;
}
const BaseStyles = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
const StyledAvatar = styled(BaseStyles)`

`;
const AvatarName = styled(BaseStyles)`
  background: grey;
  color: white;
`;
const getInitials = (firstName: AvatarProps['firstName'], lastName: AvatarProps['lastName']) {
  return firstName[0] + lastName[0];
}
export function Avatar({ src, firstName='', lastName='', ...props }: AvatarProps) {
  const fallback = Boolean(!src);
  const fullName = `${firstName} ${lastName}`;
  if(fallback) {
    return (
      <AvatarName aria-label={fullName}>
        {getInitials(firstName, lastName)}
      </AvatarName>
    )
  }
  return (
    <StyledAvatar {...props}>
      <Image src={src} height={'1em'} width={'1em'} layout={'fixed'} alt={''} />
    </StyledAvatar>
  );
}

export default Avatar;

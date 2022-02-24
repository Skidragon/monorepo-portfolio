import styled from 'styled-components';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface AvatarProps {
  src: string;
  firstName: string;
  lastName: string;
  loading?: boolean;
  background?: string;
  color?: string;
}
const BaseStyles = styled.div`
  height: 3em;
  width: 3em;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
const AvatarSkeleton = styled(BaseStyles)`
  height: 3rem;
  width: 3rem;
  background: linear-gradient(90deg, grey, #f2f2f252, grey) -1rem 0/1rem 100% no-repeat,
    grey;
  animation: skeleton-load 1s ease infinite;
  @keyframes skeleton-load {
    100% {
      background-position: 3rem;
    }
  }
`;
const StyledAvatar = styled(BaseStyles)`
  color: none;
  background: none;
`;
const AvatarName = styled(BaseStyles)<
  Required<Pick<AvatarProps, 'color' | 'background'>>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;
const getInitials = (
  firstName: AvatarProps['firstName'],
  lastName: AvatarProps['lastName']
) => {
  return firstName[0] + lastName[0];
};
export function Avatar({
  src,
  firstName = '',
  lastName = '',
  loading = false,
  background = 'grey',
  color = 'white',
  ...props
}: AvatarProps) {
  const fallback = Boolean(!src);
  const fullName = `${firstName} ${lastName}`;
  if (loading) {
    return <AvatarSkeleton />;
  }
  if (fallback) {
    return (
      <AvatarName aria-label={fullName} background={background} color={color}>
        {getInitials(firstName, lastName)}
      </AvatarName>
    );
  }
  return (
    <StyledAvatar {...props}>
      <Image src={src} height={'1em'} width={'1em'} layout={'fixed'} alt={''} />
    </StyledAvatar>
  );
}

export default Avatar;

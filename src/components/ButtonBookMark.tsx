import React, { useState } from 'react';
import styled from 'styled-components';
import { bookmarkOn, bookmarkOff } from '../assets/svg-icons';

interface ButtonBookmarkProps {
  $status: boolean;
  onClick: () => void;
}

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const StyledBookMark = styled.img`
  width: 1.5rem;
  height: 2rem;
`;

const ButtonBookMark: React.FC<ButtonBookmarkProps> = ({
  $status,
  onClick,
}) => {
  const [isBookmark, setIsBookmark] = useState<boolean>($status);

  const handleClick = () => {
    setIsBookmark(!isBookmark);
    onClick();
  };

  const bookmarkImage = isBookmark ? bookmarkOn : bookmarkOff;

  return (
    <>
      <StyledButton onClick={handleClick}>
        <StyledBookMark src={bookmarkImage} alt="bookmark" />
      </StyledButton>
    </>
  );
};

export default ButtonBookMark;

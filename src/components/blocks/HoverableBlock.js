import React from 'react';
import styled from 'styled-components';

const HoverableBlockWrapper = styled.div`
  background: white;
  padding: 38px 58px 74px;
  transition: box-shadow 500ms;
  box-shadow: ${props => props.isHovered ? "0px 50px 60px rgba(20, 26, 40, 0.1)" : "none"};
  border-radius: 6px;
  flex: 1 1 0px;
  border-left: ${props => props.isHovered ? "1px dashed transparent" : "1px dashed #D7DBE0"};
`;

const HoverableBlock = props => {
  const { isHovered, onMouseEnter, onMouseLeave } = props;

  return (
    <HoverableBlockWrapper
      isHovered={isHovered}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </HoverableBlockWrapper>
  );
};

export default HoverableBlock;
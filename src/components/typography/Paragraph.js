import React from 'react';
import styled from 'styled-components';

const ParagraphWrapper = styled.p`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: ${props => props.weight ? props.weight : "500"};
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.color ? props.color : "#9AA4B0"};
  margin: ${props => props.margin ? props.margin : "0 0 1em"};
`;

const Paragraph = props => {

  return (
    <ParagraphWrapper {...props}>
      {props.children}
    </ParagraphWrapper>
  );
};

export default Paragraph;
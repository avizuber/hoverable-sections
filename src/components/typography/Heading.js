import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.p`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.size ? props.size : "30px"};
  line-height: ${props => props.lineHeight ? props.lineHeight : "42px"};
  color: ${props => props.color ? props.color : "#374A61"};
  margin: ${props => props.margin ? props.margin : "0 0 .6em"};
`;

const Heading = props => {

  return (
    <HeadingWrapper {...props}>
      {props.children}
    </HeadingWrapper>
  );
};

export default Heading;
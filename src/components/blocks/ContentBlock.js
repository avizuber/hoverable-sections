import React from 'react';
import styled from 'styled-components';

const ContentBlockWrapper = styled.div`
  background: white;
  padding: 38px 58px 74px;
  flex: 1 1 0px;
`;

const ContentBlock = props => {

  return (
    <ContentBlockWrapper>
      {props.children}
    </ContentBlockWrapper>
  );
};

export default ContentBlock;
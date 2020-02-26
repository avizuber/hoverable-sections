import React from 'react';
import styled from 'styled-components';

import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';

const PageWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BlocksWrapper = styled.div`
  display: flex;
  flex: 3 1 0px;
`;

const LandingPage = () => {
  return (
    <PageWrapper>
        <LeftSection />
        <BlocksWrapper>
          <MiddleSection />
          <RightSection />
        </BlocksWrapper>
    </PageWrapper>
  );
};

export default LandingPage;

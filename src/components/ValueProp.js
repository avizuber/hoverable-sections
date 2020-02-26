import React from 'react';
import styled from 'styled-components';

import Paragraph from 'components/typography/Paragraph';

const ValuePropWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ValuePropChildren = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 70%;
`;

const ValuePropIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 6px;
`;

const ValuePropTag = styled.span`
  height: 26px;
  background: #F0F4FF;
  border-radius: 4px;
  padding: 2px 8px;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #225CFF;
  display: inline-flex;
  align-items: center;
  margin: 0 0 10px 5px;
`;

const iconPath = process.env.PUBLIC_URL + '/images/icons/';

const ValueProp = props => {
  const { label, icons, tags } = props;
  return (
    <ValuePropWrapper>
        <Paragraph
          color={"#364962"}
          weight={600}
          margin={"0"}
          size={"16px"}
          lineHeight={"24px"}>
          {label}
        </Paragraph>
        <ValuePropChildren>
          {icons && icons.map((icon, i) => {
            return(
              <ValuePropIcon
                key={i}
                src={`${iconPath}${icon}-icon.png`}
                alt={icon}
                title={icon}
                />
            );
          })}
          {tags && tags.map((tag, i) => {
            return(
              <ValuePropTag key={i}>{tag}</ValuePropTag>
            );
          })}
        </ValuePropChildren>
    </ValuePropWrapper>
  );
};

export default ValueProp;
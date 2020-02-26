import React from 'react';

import ContentBlock from 'components/blocks/ContentBlock';

import Heading from 'components/typography/Heading';
import Paragraph from 'components/typography/Paragraph';

const LeftSection = () => {

  return (
    <ContentBlock>
      <Heading as="h1">Start validating your ideas with Maze</Heading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum facilisis posuere.</Paragraph>
      <Paragraph
        color={"#364962"}
        weight={600}
        margin={"0"}>
        How Maze works
      </Paragraph>
      <Paragraph
        color={"#364962"}
        weight={600}
        margin={"0"}>
        What I can use it for
      </Paragraph>
    </ContentBlock>
  );
};

export default LeftSection;

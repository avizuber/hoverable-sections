import React, { useState } from 'react';

import HoverableBlock from 'components/blocks/HoverableBlock';
import RevealedInput from 'components/RevealedInput';
import ValueProp from 'components/ValueProp';
import Heading from 'components/typography/Heading';
import Paragraph from 'components/typography/Paragraph';

const MiddleSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const blockTypes = [
    'open-question',
    'multiple-choice',
    'opinion-scale',
    'yes-no',
    'context-screen'
  ];

  const perfectFor = [
    'Eating pizza',
    'Proving ideas',
    'Hunting unicorns'
  ];

  return (
    <HoverableBlock
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Paragraph
        color={"#364962"}
        weight={600}
        margin={"0"}>
        Validate your ideas with
      </Paragraph>
      <Heading
        as="h3"
        color={"#364962"}
        size={"24px"}
        lineHeight={"36px"}>
        Ideation
      </Heading>
      <Paragraph margin={"0 0 1.5em"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum facilisis posuere.</Paragraph>
      <ValueProp label={"Block types"} icons={blockTypes}/>
      <ValueProp label={"Perfect For"} tags={perfectFor}/>
      <RevealedInput 
            isRevealed={isHovered}
            buttonText="New Ideation"
            inputPlaceholder={"Project Name"}
          />
    </HoverableBlock>
  );
};

export default MiddleSection;

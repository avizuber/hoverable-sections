import React, { useState } from 'react';

import HoverableBlock from 'components/blocks/HoverableBlock';
import RevealedInput from 'components/RevealedInput';
import ValueProp from 'components/ValueProp';
import Heading from 'components/typography/Heading';
import Paragraph from 'components/typography/Paragraph';

const RightSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const blockTypes = [
    'mission',
    'open-question',
    'multiple-choice',
    'opinion-scale',
    'yes-no',
    'context-screen'
  ];

  const platforms = [
    'figma',
    'invision',
    'sketch',
    'marvelapp'
  ];

  const perfectFor = [
    'Proving concepts'
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
        Validate your designs with
      </Paragraph>
      <Heading
        as="h3"
        color={"#364962"}
        size={"24px"}
        lineHeight={"36px"}>
        Maze Prototypes
      </Heading>
      <Paragraph margin={"0 0 1.5em"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum facilisis posuere.</Paragraph>
      <ValueProp label={"Block types"} icons={blockTypes}/>
      <ValueProp label={"Platforms"} icons={platforms}/>
      <ValueProp label={"Perfect For"} tags={perfectFor}/>
      <RevealedInput 
            isRevealed={isHovered}
            buttonText="New Maze"
            inputPlaceholder={"Prototype link"}
            link={"Where to find this link?"}
          />
    </HoverableBlock>
  );
};

export default RightSection;

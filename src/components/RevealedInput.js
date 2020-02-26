import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Button from 'components/elements/Button';
import Input from 'components/elements/Input';
import InfoLink from 'components/elements/InfoLink';

const RevealedInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const InputWrapper = styled.div`
  opacity: 0;
  flex-grow: 0;
  width:0;
  
  &.fade-enter {
    opacity: 0;
    flex-grow: 0;
    width:0;
  }

  &.fade-enter-active,
  &.fade-enter-done  {
    opacity: 1;
    flex-grow: 1;
    width: auto;
    transition: flex-grow 200ms linear, opacity 200ms, width 250ms;
  }

  &.fade-exit {
    opacity: 1;
    flex-grow: 1;
    width: auto;
  }

  &.fade-exit-active,
  &.fade-exit-done {
    opacity: 0;
    flex-grow: 0;
    width:0;
    transition: flex-grow 200ms linear, opacity 200ms, width 250ms;
  }
`;

const InfoLinkWrapper = styled.div`
  opacity: 0;
  
  &.linkFade-enter {
    opacity: 0;
  }

  &.linkFade-enter-active,
  &.linkFade-enter-done  {
    opacity: 1;
    transition: opacity 200ms;
  }

  &.linkFade-exit {
    opacity: 1;
  }

  &.linkFade-exit-active,
  &.linkFade-exit-done {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const RevealedInputWrapper = ( { isRevealed, buttonText, inputPlaceholder, link } ) => {
  const [isInputRevealed, setIsRevealed] = useState(isRevealed);
  const [hasInputValue, setHasInputValue] = useState(undefined);

  const setAsRevealed = isInputRevealed || hasInputValue;

  useEffect(() => {
    setIsRevealed(isRevealed);
  }, [isRevealed]);

  return (
    <>
      <RevealedInput>
        <CSSTransition
          in={setAsRevealed}
          timeout={500}
          classNames="fade">
          <InputWrapper>
              <Input
                type="text"
                value={hasInputValue}
                onChange={(e) => setHasInputValue(e.target.value)}
                placeholder={inputPlaceholder}
                groupedLeft={setAsRevealed} />
          </InputWrapper>
        </CSSTransition>
        <Button
          groupedRight={setAsRevealed}>
          {buttonText}
        </Button>
      </RevealedInput>
      {link &&
        <CSSTransition
          in={setAsRevealed}
          timeout={400}
          classNames="linkFade">
            <InfoLinkWrapper>
              <InfoLink>{link}</InfoLink>
            </InfoLinkWrapper>
        </CSSTransition>
      }
    </>
  );
};

export default RevealedInputWrapper;
import styled from 'styled-components';

const Input = styled.input`
  color: #9AA4B0;
  font-size: 16px;
  line-height: 24px;
  padding: 12px;
  border: 1px solid #D7DBE0;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-top-right-radius: ${props => props.groupedLeft ? "0px" : "4px"};
  border-bottom-right-radius: ${props => props.groupedLeft ? "0px" : "4px"};
  border-bottom-left-radius: 4px;
  background: white;
  font-weight: normal;
  width: 100%;
`;

export default Input;
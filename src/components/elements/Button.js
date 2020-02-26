import styled from 'styled-components';

const Button = styled.button`
  color: white;
  font-weight: bold;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.5px;
  padding: 13px 20px;
  border: none;
  border-top-left-radius: ${props => props.groupedRight ? "0px" : "4px"};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: ${props => props.groupedRight ? "0px" : "4px"};
  background: #225CFF;
  text-transform: uppercase;
  cursor: pointer;
  min-height: 50px;
  white-space: nowrap;
  overflow: hidden;
`;

export default Button;
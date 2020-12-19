import styled from 'styled-components';

const StyledEstimate = styled.button`
  span {
    color: ${(props) => props.colour};
    font-size: 16px;
    margin-bottom: 0;
    display: inline-block;
  }

  border: none;
  background: none;
  position: relative;
  top: -5px;
  cursor: pointer;
  outline: none;
`;

export default StyledEstimate;

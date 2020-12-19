import styled from 'styled-components';

export const StyledEstimateButton = styled.button`
  border: 1px solid ${(props) => props.colour};
  border-left: 5px solid ${(props) => props.colour};
  margin-right: 0.25em;
  h4 {
    font-size: 16px;
    margin-top: 0;
  }
`;

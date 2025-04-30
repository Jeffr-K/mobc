import styled from 'styled-components';

export const VerticalDivider = styled.div`
  height: 24px;
  border-left: 1px solid ${({ theme }) => theme.colors.gray200};
  margin: 0 8px;
`;
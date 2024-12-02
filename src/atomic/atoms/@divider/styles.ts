import styled from 'styled-components';

export const VerticalDivider = styled.div`
  height: 24px;  // 원하는 높이
  border-left: 1px solid ${({ theme }) => theme.colors.gray200};
  margin: 0 8px;  // 좌우 여백
`;
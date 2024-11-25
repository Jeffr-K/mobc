import styled from 'styled-components';

export const NotificationCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${props => props.theme.colors};
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  min-width: 18px;
  text-align: center;
`;

export const NotificationWrapper = styled.div`
  position: relative;
`;

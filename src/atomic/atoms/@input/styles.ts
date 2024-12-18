import styled from 'styled-components';

export const Container = styled.div<{ $fullWidth?: boolean }>`
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input<{
  $marginTop?: number;
  $fontSize?: number;
  $fontWeight?: number;
  $color?: string;
}>`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: ${({ $fontSize }) => $fontSize ?? 14}px;
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 400};
  color: ${({ $color }) => $color ?? '#000'};
  box-sizing: border-box;
  margin-top: ${({ $marginTop }) => $marginTop ?? 0}px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

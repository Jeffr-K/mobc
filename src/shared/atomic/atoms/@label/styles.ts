import { styled } from "styled-components";

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export const Container = styled.div<{
  marginBottom?: number;
}>`
  margin-bottom: ${props => props.marginBottom ? String(props.marginBottom) : '0'};
`;

export const Label = styled.label<{
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  textAlign?: TextAlign;
  lineHeight?: number;
  letterSpacing?: number;
  textDecoration?: string;
  textTransform?: TextTransform;
  textOverflow?: string;
  whiteSpace?: string;
}>`
  font-size: ${props => props.fontSize ? String(props.fontSize) : '16px'};
  font-weight: ${props => props.fontWeight ? String(props.fontWeight) : '400'};
  color: ${props => props.color ? props.color : '#000'};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  line-height: ${props => props.lineHeight ? String(props.lineHeight) : '1.5'};
  letter-spacing: ${props => props.letterSpacing ? String(props.letterSpacing) : '0'};
  text-decoration: ${props => props.textDecoration ? props.textDecoration : 'none'};
  text-transform: ${props => props.textTransform ? props.textTransform : 'none'};
  text-overflow: ${props => props.textOverflow ? props.textOverflow : 'clip'};
  white-space: ${props => props.whiteSpace ? props.whiteSpace : 'normal'};
`;
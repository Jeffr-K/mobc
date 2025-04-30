import { TextAlign, TextTransform } from "./styles";

export function Label(props: {
  name: string;
  htmlFor: string;
  marginBottom?: number;
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
}): React.ReactElement {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        style={{
          marginBottom: props.marginBottom ? String(props.marginBottom) : '0',
          fontSize: props.fontSize ? String(props.fontSize) : '16px',
          fontWeight: props.fontWeight ? String(props.fontWeight) : '400',
          color: props.color ? props.color : '#000',
          textAlign: props.textAlign ? props.textAlign : 'left',
          lineHeight: props.lineHeight ? String(props.lineHeight) : '1.5',
          letterSpacing: props.letterSpacing ? String(props.letterSpacing) : '0',
          textDecoration: props.textDecoration ? props.textDecoration : 'none',
          textTransform: props.textTransform ? props.textTransform : 'none',
          textOverflow: props.textOverflow ? props.textOverflow : 'clip',
          whiteSpace: props.whiteSpace ? props.whiteSpace : 'normal',
        }}
      >
        {props.name}
      </label>
    </div>
  )
}
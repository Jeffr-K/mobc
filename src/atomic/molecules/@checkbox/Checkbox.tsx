interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  name, 
  checked, 
  onChange, 
  required = false
}) => {
  return (
    <S.Container>
      <S.Input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <Atom.Label htmlFor={name} name={name} />
    </S.Container>
  );
}; 
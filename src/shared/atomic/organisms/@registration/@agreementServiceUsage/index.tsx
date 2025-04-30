import React, { useState } from 'react';
import * as S from './styles';
import * as Molecule from '@/shared/atomic/molecules';
import * as Atom from '@/shared/atomic/atoms';

export function AgreementServiceUsage() {
  const [agreements, setAgreements] = useState({
    all: false,
    age: false,
    terms: false,
    privacy: false,
    marketing: false
  });

  const handleChange = (key: keyof typeof agreements) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (key === 'all') {
      const newValue = e.target.checked;
      setAgreements({
        all: newValue,
        age: newValue,
        terms: newValue,
        privacy: newValue,
        marketing: newValue
      });
    } else {
      setAgreements(prev => ({
        ...prev,
        [key]: e.target.checked,
        all: false
      }));
    }
  };

  return (
    <S.Container>
      <S.Content>
        <Molecule.Typography variant="h1" children="약관 동의" marginBottom={24} />
        
        <S.CheckboxGroup>
          <Molecule.Checkbox
            name="모두 동의"
            checked={agreements.all}
            onChange={handleChange('all')}
          />
          
          <S.Divider />
          
          <S.CheckboxWrapper>
            <Molecule.Checkbox
              name="(필수) 만 14세 이상입니다."
              checked={agreements.age}
              onChange={handleChange('age')}
              required
            />
          </S.CheckboxWrapper>

          <S.CheckboxWrapper>
            <Molecule.Checkbox
              name="(필수) 페르소나 이용약관 동의"
              checked={agreements.terms}
              onChange={handleChange('terms')}
              required
            />
            <S.ViewButton>보기</S.ViewButton>
          </S.CheckboxWrapper>

          <S.CheckboxWrapper>
            <Molecule.Checkbox
              name="(필수) 개인정보 수집 및 이용 동의"
              checked={agreements.privacy}
              onChange={handleChange('privacy')}
              required
            />
            <S.ViewButton>보기</S.ViewButton>
          </S.CheckboxWrapper>

          <S.CheckboxWrapper>
            <Molecule.Checkbox
              name="(선택) 마케팅 정보 수신 동의"
              checked={agreements.marketing}
              onChange={handleChange('marketing')}
            />
            <S.ViewButton>보기</S.ViewButton>
          </S.CheckboxWrapper>
        </S.CheckboxGroup>

        <S.ButtonWrapper>
          <Atom.Button>회원가입</Atom.Button>
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  );
}
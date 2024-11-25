import React, { useState } from 'react';

import * as S from './styles';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading?: boolean;
}

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputGroup>
        <S.Label>Email</S.Label>
        <S.Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </S.InputGroup>

      <S.InputGroup>
        <S.Label>Password</S.Label>
        <S.Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </S.InputGroup>

      <S.Button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : '로그인'}
      </S.Button>
    </S.Form>
  );
};

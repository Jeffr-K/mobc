import React, { useState, useEffect } from "react";

import * as S from "./styles";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveId, setSaveId] = useState(false);

  // 컴포넌트 마운트 시 저장된 아이디 불러오기
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setSaveId(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saveId) {
      localStorage.setItem("savedEmail", email);
    } else {
      localStorage.removeItem("savedEmail");
    }
    await onSubmit(email, password);
  };

  return (
    <S.FormWrapper>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" required />
        <S.FormFooter>
          <S.SaveIdWrapper>
            <input type="checkbox" checked={saveId} onChange={e => setSaveId(e.target.checked)} id="saveId" />
            <label htmlFor="saveId">아이디 저장</label>
          </S.SaveIdWrapper>
          <S.FindLinksWrapper>
            <S.FindLink>아이디 찾기</S.FindLink>
            <S.FindLink>비밀번호 찾기</S.FindLink>
          </S.FindLinksWrapper>
        </S.FormFooter>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </S.FormWrapper>
  );
}

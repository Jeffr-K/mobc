import React, { useState } from 'react';

import { LoginModal } from '../organisms/@modal/@login';

export const LoginPage: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Logged in:', email);
      console.log('Password:', password);
      setIsLoginModalOpen(false);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    try {
      // Social @@login logic here
      console.log('Social @@login:', provider);
      setIsLoginModalOpen(false);
    } catch (error) {
      console.error('Social @@login failed:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setIsLoginModalOpen(true)}>로그인</button>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
        onSocialLogin={handleSocialLogin}
        isLoading={isLoading}
      />
    </div>
  );
};

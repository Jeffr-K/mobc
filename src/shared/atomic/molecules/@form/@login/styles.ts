import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }

  input {
    width: 100%;
    height: 52px;
    padding: 0 ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: 1rem;
    box-sizing: border-box;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}1A`};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.placeholder};
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 52px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
    margin-top: ${({ theme }) => theme.spacing.sm};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const SaveIdWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`;

export const FindLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const FindLink = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
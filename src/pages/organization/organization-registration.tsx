import React, { useState } from "react";
import styled from "styled-components";

export function OrganizationRegistrationPage(): React.ReactElement {
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    description: "",
    history: "",
    businessNumber: "",
    phoneNumber: "",
    employeeCount: "",
    privacyAgreement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    console.log(formData);
  };

  return (
    <Container>
      <Title>기업 등록</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>기업명</Label>
          <Input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>주요 사업</Label>
          <Input
            type="text" 
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>회사 소개</Label>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>회사 연혁</Label>
          <TextArea
            name="history"
            value={formData.history}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>사업자 등록 번호</Label>
          <Input
            type="text"
            name="businessNumber"
            value={formData.businessNumber}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>회사 전화번호</Label>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>총 직원수</Label>
          <Input
            type="number"
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="privacyAgreement"
              checked={formData.privacyAgreement}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                privacyAgreement: e.target.checked
              }))}
              required
            />
            개인정보 수집 및 이용에 동의합니다
          </CheckboxLabel>
        </FormGroup>

        <SubmitButton type="submit">등록하기</SubmitButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
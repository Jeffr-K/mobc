import React, { useState } from "react";
import styled from "styled-components";

export function TalentPoolPage(): React.ReactElement {
  const [talentData, setTalentData] = useState({
    name: "",
    position: "",
    experience: "",
    skills: "",
    education: "",
    portfolio: "",
    contact: "",
    memo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTalentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(talentData);
  };

  return (
    <Container>
      <Title>인재 등록</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>이름</Label>
          <Input
            type="text"
            name="name"
            value={talentData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>희망 포지션</Label>
          <Input
            type="text"
            name="position" 
            value={talentData.position}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>경력사항</Label>
          <TextArea
            name="experience"
            value={talentData.experience}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>보유 기술</Label>
          <Input
            type="text"
            name="skills"
            value={talentData.skills}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>학력</Label>
          <Input
            type="text"
            name="education"
            value={talentData.education}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>포트폴리오 URL</Label>
          <Input
            type="url"
            name="portfolio"
            value={talentData.portfolio}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>연락처</Label>
          <Input
            type="text"
            name="contact"
            value={talentData.contact}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>메모</Label>
          <TextArea
            name="memo"
            value={talentData.memo}
            onChange={handleChange}
          />
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
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

import { Pencil, Mail, Globe, MapPin, Briefcase, User2, Heart, Code2, Book, Star, Coffee, Github } from 'lucide-react';
import * as Styles from './persona.x-styles';

interface Props {
  contact: {
    email: string;
    github: string;
    blog: string;
  };
  personal: {
    name: string;
    description: string;
    job: string;
    personality: string;
    interests: string[];
  };
  identity: {
    frontend: string;
    backend: string;
    tools: string;
  };
  location: {
    address: string;
    education: string;
    experience: string;
  };
}

export function PersonaCards({ contact, personal, identity, location }: Props) {
  return (
    <Styles.GridLayout>
      <ProfileCard personal={personal} />
      <LocationCard location={location} />
      <TechStackCard identity={identity} />
      <ContactCard contact={contact} />
    </Styles.GridLayout>
  );
}

function ProfileCard({ personal }: Pick<Props, 'personal'>) {
  return (
    <Styles.ProfileCard>
      <Styles.CardHeader>
        <Styles.Name>{personal.name}</Styles.Name>
        <Styles.EditButton>
          <Pencil size={14} />
        </Styles.EditButton>
      </Styles.CardHeader>
      <Styles.Description>{personal.description}</Styles.Description>
      <Styles.InfoGrid>
        <Styles.InfoItem>
          <Styles.InfoIcon><Briefcase size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>직무</Styles.InfoLabel>
            <Styles.InfoValue>{personal.job}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon><User2 size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>성격</Styles.InfoLabel>
            <Styles.InfoValue>{personal.personality}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon><Heart size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>관심사</Styles.InfoLabel>
            <Styles.InfoValue>{personal.interests.join(', ')}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
      </Styles.InfoGrid> 
    </Styles.ProfileCard>
  );
}

function LocationCard({ location }: Pick<Props, 'location'>) {
  return (
    <Styles.LocationCard>
      <Styles.CardHeader>
        <Styles.Name>활동 정보</Styles.Name>
        <Styles.EditButton>
          <Pencil size={14} />
        </Styles.EditButton>
      </Styles.CardHeader>
      <Styles.InfoGrid>
        <Styles.InfoItem>
          <Styles.InfoIcon><MapPin size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>활동 지역</Styles.InfoLabel>
            <Styles.InfoValue>{location.address}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon><Book size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>학력</Styles.InfoLabel>
            <Styles.InfoValue>{location.education}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon><Star size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>경력</Styles.InfoLabel>
            <Styles.InfoValue>{location.experience}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
      </Styles.InfoGrid>
    </Styles.LocationCard>
  );
}

function TechStackCard({ identity }: Pick<Props, 'identity'>) {
  return (
    <Styles.TechStackCard>
      <Styles.CardHeader>
        <Styles.Name>기술 스택</Styles.Name>
        <Styles.EditButton>
          <Pencil size={14} />
        </Styles.EditButton>
      </Styles.CardHeader>
      <Styles.InfoGrid>
        <Styles.InfoItem>
          <Styles.InfoIcon><Code2 size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>프론트엔드</Styles.InfoLabel>
            <Styles.InfoValue>{identity.frontend}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon><Code2 size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>백엔드</Styles.InfoLabel>
            <Styles.InfoValue>{identity.backend}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon><Coffee size={14} /></Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>개발 도구</Styles.InfoLabel>
            <Styles.InfoValue>{identity.tools}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
      </Styles.InfoGrid>
    </Styles.TechStackCard>
  );
}

function ContactCard({ contact }: Pick<Props, 'contact'>) {
  return (
    <Styles.ContactCard>
      <Styles.CardHeader>
        <Styles.Name>연락처</Styles.Name>
        <Styles.EditButton>
          <Pencil size={14} />
        </Styles.EditButton>
      </Styles.CardHeader>
      <Styles.ContactLinks>
        <Styles.LinkItem>
          <Mail size={14} />
          <span>{contact.email}</span>
        </Styles.LinkItem>
        <Styles.LinkItem>
          <Github size={14} />
          <span>{contact.github}</span>
        </Styles.LinkItem>
        <Styles.LinkItem>
          <Globe size={14} />
          <span>{contact.blog}</span>
        </Styles.LinkItem>
      </Styles.ContactLinks>
    </Styles.ContactCard>
  );
}
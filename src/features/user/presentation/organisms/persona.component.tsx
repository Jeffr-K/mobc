import { useState } from "react";
import { Pencil, Mail, Globe, MapPin, Briefcase, User2, Heart, Code2, Book, Star, Coffee, Github } from "lucide-react";
import * as Styles from "../persona.x-styles";
import { Persona } from "../../core/model/profile.model";
import { Modal } from "../atoms/modal.component";
import { ProfileForm, LocationForm, TechStackForm, ContactForm } from "../molecules/persona-forms";
import { useProfilePersonalPatchMutation, useProfileLocationPatchMutation, useProfileIdentityPatchMutation, useProfileContactPatchMutation } from "../../infrastructure/adapter/mutation/profile.mutation";
import { useAtom } from "jotai";
import { profilePersonaAtom } from "../../infrastructure/adapter/query/profile.query";
import { ApiResponse } from "@/shared/utils/apiResponse";

export function PersonaCards() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isTechStackModalOpen, setIsTechStackModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [persona] = useAtom(profilePersonaAtom);
  const personalMutation = useProfilePersonalPatchMutation();
  const locationMutation = useProfileLocationPatchMutation();
  const identityMutation = useProfileIdentityPatchMutation();
  const contactMutation = useProfileContactPatchMutation();

  const handleProfileSubmit = (data: Persona['personal']) => {
    personalMutation.mutate({ personal: data }, {
      onSuccess: () => setIsProfileModalOpen(false)
    });
  };

  const handleLocationSubmit = (data: Persona['location']) => {
    locationMutation.mutate({ location: data }, {
      onSuccess: () => setIsLocationModalOpen(false)
    });
  };

  const handleTechStackSubmit = (data: Persona['identity']) => {
    identityMutation.mutate({ identity: data }, {
      onSuccess: () => setIsTechStackModalOpen(false)
    });
  };

  const handleContactSubmit = (data: Persona['contact']) => {
    contactMutation.mutate({ contact: data }, {
      onSuccess: () => setIsContactModalOpen(false)
    });
  };

  if (!persona.data?.data) return null;

  const personaData = persona.data.data;

  return (
    <>
      <Styles.GridLayout>
        <ProfileCard personal={personaData.personal} onEdit={() => setIsProfileModalOpen(true)} />
        <LocationCard location={personaData.location} onEdit={() => setIsLocationModalOpen(true)} />
        <TechStackCard identity={personaData.identity} onEdit={() => setIsTechStackModalOpen(true)} />
        <ContactCard contact={personaData.contact} onEdit={() => setIsContactModalOpen(true)} />
      </Styles.GridLayout>

      <Modal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} title="프로필 수정">
        <ProfileForm data={personaData.personal} onSubmit={handleProfileSubmit} />
      </Modal>

      <Modal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} title="활동 정보 수정">
        <LocationForm data={personaData.location} onSubmit={handleLocationSubmit} />
      </Modal>

      <Modal isOpen={isTechStackModalOpen} onClose={() => setIsTechStackModalOpen(false)} title="기술 스택 수정">
        <TechStackForm data={personaData.identity} onSubmit={handleTechStackSubmit} />
      </Modal>

      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="연락처 수정">
        <ContactForm data={personaData.contact} onSubmit={handleContactSubmit} />
      </Modal>
    </>
  );
}

function ProfileCard({ personal, onEdit }: Readonly<Pick<Persona, "personal">> & { onEdit: () => void }) {
  return (
    <Styles.ProfileCard>
      <Styles.CardHeader>
        <Styles.Name>{personal.name}</Styles.Name>
        <Styles.EditButton onClick={onEdit}>
          <Pencil size={14} />
        </Styles.EditButton>
      </Styles.CardHeader>
      <Styles.Description>{personal.description}</Styles.Description>
      <Styles.InfoGrid>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <Briefcase size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>직무</Styles.InfoLabel>
            <Styles.InfoValue>{personal.job}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <User2 size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>성격</Styles.InfoLabel>
            <Styles.InfoValue>{personal.personality}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <Heart size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>관심사</Styles.InfoLabel>
            <Styles.InfoValue>{personal.interests.join(", ")}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
      </Styles.InfoGrid>
    </Styles.ProfileCard>
  );
}

function LocationCard({ location, onEdit }: Readonly<Pick<Persona, "location">> & { onEdit: () => void }) {
  return (
    <Styles.LocationCard>
      <Styles.CardHeader>
        <Styles.Name>활동 정보</Styles.Name>
        <Styles.EditButton onClick={onEdit}>
          <Pencil size={14} />
        </Styles.EditButton>
      </Styles.CardHeader>
      <Styles.InfoGrid>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <MapPin size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>활동 지역</Styles.InfoLabel>
            <Styles.InfoValue>{location.address}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <Book size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>학력</Styles.InfoLabel>
            <Styles.InfoValue>{location.education}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <Star size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>경력</Styles.InfoLabel>
            <Styles.InfoValue>{location.experience}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
      </Styles.InfoGrid>
    </Styles.LocationCard>
  );
}

function TechStackCard({ identity, onEdit }: Readonly<Pick<Persona, "identity">> & { onEdit: () => void }) {
  return (
    <Styles.TechStackCard>
      <Styles.CardHeader>
        <Styles.Name>기술 스택</Styles.Name>
        <Styles.EditButton onClick={onEdit}>
          <Pencil size={14} />
        </Styles.EditButton>
      </Styles.CardHeader>
      <Styles.InfoGrid>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <Code2 size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>프론트엔드</Styles.InfoLabel>
            <Styles.InfoValue>{identity?.frontend || "React"}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <Code2 size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>백엔드</Styles.InfoLabel>
            <Styles.InfoValue>{identity?.backend || "Node.js"}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
        <Styles.InfoItem>
          <Styles.InfoIcon>
            <Coffee size={14} />
          </Styles.InfoIcon>
          <Styles.InfoContent>
            <Styles.InfoLabel>개발 도구</Styles.InfoLabel>
            <Styles.InfoValue>{identity?.tools || "tool"}</Styles.InfoValue>
          </Styles.InfoContent>
        </Styles.InfoItem>
      </Styles.InfoGrid>
    </Styles.TechStackCard>
  );
}

function ContactCard({ contact, onEdit }: Readonly<Pick<Persona, "contact">> & { onEdit: () => void }) {
  return (
    <Styles.ContactCard>
      <Styles.CardHeader>
        <Styles.Name>연락처</Styles.Name>
        <Styles.EditButton onClick={onEdit}>
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

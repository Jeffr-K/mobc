import React from 'react';

import { User } from 'lucide-react';

import * as Molecule from '../../@dropdown/@menu';
import * as S from './styles';

interface ProfileMenuProps {
  user: {
    name: string;
    image?: string;
  };
  onLogout: () => void;
  onSettings: () => void;
}

export const ProfileMenu = ({ user, onLogout, onSettings }: ProfileMenuProps) => (
  <Molecule.DropdownMenu
    trigger={
      <S.ProfileTrigger>
        {user.image ? <S.ProfileImage src={user.image} alt={user.name} /> : <User size={32} />}
      </S.ProfileTrigger>
    }
    items={[
      { label: '설정', onClick: onSettings },
      { label: '로그아웃', onClick: onLogout },
    ]}
  />
);

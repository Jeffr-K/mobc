import React from 'react';

import { Bell } from 'lucide-react';

import * as Molecules from '@/atomic/atoms/@icon/icon';
import * as S from './styles';
import { NotificationCount } from './styles';

interface NotificationBellProps {
  count: number;
  onClick: () => void;
}

export const NotificationBell = ({ count, onClick }: NotificationBellProps) => (
  <S.NotificationWrapper>
    <Molecules.IconButton icon={<Bell size={20} />} onClick={onClick} />
    {count > 0 && <NotificationCount>{count}</NotificationCount>}
  </S.NotificationWrapper>
);

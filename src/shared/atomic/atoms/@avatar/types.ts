import React, { MouseEvent } from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  fallback?: React.ReactNode;
  status?: 'online' | 'offline' | 'away' | 'busy';
  border?: boolean;
  loading?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  interactive?: boolean;
  optimizeImage?: boolean;
}

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  spacing?: number;
  size?: AvatarProps['size'];
  border?: boolean;
}

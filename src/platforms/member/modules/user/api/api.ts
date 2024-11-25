import axios from 'axios';

import { ApiResponse } from '../../../../../core/utils/apiResponse';
import { User } from './types';

export const fetchUser = async (userId: string) =>
  await axios.get<ApiResponse<User>>('/api/v1/user', { params: { userId } }).then(res => res.data);

export const fetchUsers = async (page: number, limit: number) =>
  await axios
    .get<ApiResponse<User[]>>('/api/v1/users', { params: { page, limit } })
    .then(res => res.data);

import { BlogPost } from '@/features/user/core/model/profile.model';

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    profileId: '1',
    title: 'React Query 사용 시 주의해야 할 점들',
    url: 'https://blog.test.com/react-query-tips',
    date: '2024-03-15',
    createdAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z'
  },
  {
    id: '2',
    profileId: '1',
    title: 'TypeScript로 API 응답 타입 정의하기',
    url: 'https://blog.test.com/typescript-api-types',
    date: '2024-03-14',
    createdAt: '2024-03-14T00:00:00Z',
    updatedAt: '2024-03-14T00:00:00Z'
  },
  {
    id: '3',
    profileId: '1',
    title: 'Next.js 14의 새로운 기능들',
    url: 'https://blog.test.com/nextjs-14-features',
    date: '2024-03-10',
    createdAt: '2024-03-10T00:00:00Z',
    updatedAt: '2024-03-10T00:00:00Z'
  },
  {
    id: '4',
    profileId: '1',
    title: 'MSW로 API 모킹하기',
    url: 'https://blog.test.com/msw-api-mocking',
    date: '2024-03-05',
    createdAt: '2024-03-05T00:00:00Z',
    updatedAt: '2024-03-05T00:00:00Z'
  },
  {
    id: '5',
    profileId: '1',
    title: 'Tailwind CSS로 반응형 디자인 구현하기',
    url: 'https://blog.test.com/tailwind-responsive',
    date: '2024-03-01',
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z'
  }
]; 
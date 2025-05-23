import { Profile } from '@/features/user/core/model/profile.model';

export const mockProfile: Profile = {
  uuid: '1',
  avatar: 'https://i.pravatar.cc/150?img=1',
  persona: {
    contact: {
      email: 'test@example.com',
      github: 'https://github.com/test',
      blog: 'https://blog.test.com'
    },
    personal: {
      name: '홍길동',
      description: '프론트엔드 개발자',
      job: '시니어 개발자',
      personality: 'ENFP',
      interests: ['React', 'TypeScript', 'UI/UX']
    },
    identity: {
      frontend: 'React, TypeScript, Next.js',
      backend: 'Node.js, Express',
      tools: 'Git, Docker, AWS'
    },
    location: {
      address: '서울시 강남구',
      education: '서울대학교',
      experience: '5년'
    }
  },
  skill: {
    techSkills: [
      { name: 'React', image: 'https://i.pravatar.cc/150?img=2' },
      { name: 'TypeScript', image: 'https://i.pravatar.cc/150?img=3' }
    ],
    usableTools: [
      { name: 'Git', image: 'https://i.pravatar.cc/150?img=4' },
      { name: 'Docker', image: 'https://i.pravatar.cc/150?img=5' }
    ]
  },
  experience: [],
  education: [],
  activity: {
    id: 1,
    title: '프로젝트 A',
    description: '프로젝트 A 설명',
    period: ['2024-01', '2024-03'],
    role: '프론트엔드 개발자',
    team: 'Team A',
    location: '서울',
    isPublic: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: null,
    deletedAt: null
  },
  garage: {
    id: '1',
    title: '프로젝트 B',
    description: '프로젝트 B 설명',
    period: ['2024-02', '2024-04'],
    role: '백엔드 개발자',
    team: 'Team B',
    location: '서울',
    isPublic: true,
    url: 'https://github.com/test/project-b',
    language: 'TypeScript',
    stars: 10,
    forks: 5,
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: null,
    deletedAt: null
  },
  user: {
    _id: 1,
    uuid: '1',
    username: 'hong',
    nickname: '홍길동',
    email: 'test@example.com',
    agreements: {
      privacyPolicy: true,
      terms: true,
      notMinority: true
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: null,
    deletedAt: null
  },
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  deleteAt: ''
}; 
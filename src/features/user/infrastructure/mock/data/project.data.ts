import { Project } from '@/features/user/core/model/profile.model';

export const mockProjects: Project[] = [
  {
    id: '1',
    profileId: '1',
    title: '프로젝트 관리 시스템',
    description: 'React와 Node.js를 사용한 프로젝트 관리 웹 애플리케이션. 실시간 협업 기능과 칸반 보드를 지원합니다.',
    link: 'https://github.com/test/project-management',
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z'
  },
  {
    id: '2',
    profileId: '1',
    title: '쇼핑몰 플랫폼',
    description: 'Next.js와 TypeScript로 개발한 온라인 쇼핑몰. 결제 시스템과 재고 관리를 포함합니다.',
    link: 'https://github.com/test/shopping-mall',
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-03-10T00:00:00Z'
  },
  {
    id: '3',
    profileId: '1',
    title: 'AI 채팅봇',
    description: 'OpenAI API를 활용한 지능형 채팅봇. 자연어 처리와 대화 컨텍스트 관리 기능을 구현했습니다.',
    link: 'https://github.com/test/ai-chatbot',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-03-05T00:00:00Z'
  },
  {
    id: '4',
    profileId: '1',
    title: '포트폴리오 웹사이트',
    description: 'React와 Styled Components로 개발한 개인 포트폴리오 웹사이트. 반응형 디자인과 다크 모드를 지원합니다.',
    link: 'https://github.com/test/portfolio',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z'
  }
]; 
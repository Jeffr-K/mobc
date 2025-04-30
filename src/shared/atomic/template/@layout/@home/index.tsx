import { Feeds } from '@/shared/atomic/organisms/@feed';
import * as S from './styles';

export function HomeLayout(): React.ReactElement {
  return (
    <S.Container>
      <S.LeftSidebar>
        {/* <Filters /> */}
      </S.LeftSidebar>

      <S.MainContent>
        <Feeds />
        {/* <Promotion />
        <MyConnections /> */}
      </S.MainContent>

      <S.RightSidebar>
        {/* <RealtimeHotCaves /> */}
      </S.RightSidebar>
      
    </S.Container>
  )
}

// <div>
//         {/* 좌측 사이드바 */}
//         {/* TODO: 필터 사이드바(1) */}
//         {/* 그룹별 */}
//         {/* 1촌별 */}
//         {/* 북마크별 */}
//         {/* 해쉬태그별 */}
//       </div>
//       <div>
//         {/* 피드 목록 조회 */}
//       </div>
//       <div>배너(캐러샐 2개씩 크기에 맞게)</div>
//       <div>
//         <div>
//           <h1>적극 채용 중이에요!</h1>
//           <div>캐러샐</div>
//           <div>캐러샐</div>
//           <div>캐러샐</div>
//         </div>
//         <div>
//           <h1>팔로우한 기업들 중 채용 공고가 오픈되었어요</h1>
//           <div>기업1</div>
//           <div>기업2</div>
//           <div>기업3</div>
//           <div>기업3</div>
//         </div>
//         <div>
//           <h1></h1>
//         </div>
//         <div>
//           <h1>관심 있는 분야 채용 공고</h1>
//           <div>캐러샐</div>
//           <div>캐러샐</div>
//           <div>캐러샐</div>
//         </div>
//         <div>
//           <h1>신규 가입한 주니어들이에요</h1>
//           <div>캐러샐</div>
//           <div>캐러샐</div>
//           <div>캐러샐</div>
//         </div>
//         <div>
//           <h1>
//             <h1>관심이 </h1>
//           </h1>
//         </div>
//       </div>

//       <div>우측 사이드바</div>
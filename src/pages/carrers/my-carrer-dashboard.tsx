export function MyCarrerDashboardPage(): React.ReactElement {
  return (
    <div className="Container">
      <div>
        <h1>내 지원현황</h1>
        <div>대기</div>
        <div>서류통과</div>
        <div>면접준비중</div>
        <div>합격</div>
        <div>불합격</div>
      </div>
      <div>
        <h1>제안현황</h1>
        <div>제안받기</div>
      </div>
      <div className="내 지원내역">
      <h1>지원내역 총 1000건</h1>
      <div className="필터별 보기">
        <ul>
          <li>전체</li>
          <li>대기업순</li>
          <li>중견기업순</li>
          <li>중소기업순</li>
          <li>채용공고</li>
          <li>채용공고</li>
          <li>채용공고</li>
        </ul>
      </div>
      <div className="지원내역 목록조회"></div>
    </div>
    </div>
    
  )
}

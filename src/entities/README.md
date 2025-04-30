# FSD/Entities

---

FSD 아키텍처에서 Entity 가 제공하는 역할은 백엔드에서 Repository 또는 Persistance 의 개념과 유사합니다. 사용자와 직접적으로 상호 작용하는 부분은 Clean Architecture 에서 UI 레이어가 담당합니다.

반대로 백엔드 서버와 직접적으로 상호 작용하는 부분이 필요한데요. 이 부분을 FSD 아키텍처에서는 Entity 레이어가 담당합니다.

하지만 백엔드 엔지니어 입장에서는 Entity 라는 요소는 비지니스의 코어를 담당하는 요소 입니다. DDD 맥락과 어느정도 일치하지만 어느정도는 상반되는 것 같습니다.

차라리 Internal Interaction Layer 라는 요소로 추상화하는 것이 더 올바르다고 생각합니다. 결과적으로 이 아키텍처의 핵심은, 더 작은것으로 쪼개 재사용성과 의존성, 결합성을 낮추는 것에 의의가 있다고 판단하였습니다.


[github client](https://github.com/ani-team/github-client/tree/dev)
[nukeapp](https://github.com/noveogroup-amorgunov/nukeapp)
[sudoku](https://github.com/Shiyan7/sudoku-effector)
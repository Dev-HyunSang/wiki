<template>
  <div class="info">
    <h1>Welcome to Today HyunSang Learned</h1>
    <ul>
      <li>하루에 하나씩 공부하면서 공부한 내용들을 기록합니다.</li>
      <li>Go언어와 Rust를 항상 공부하며 개발하고 있습니다.<br />프로그래밍 언어를 공부하면서 배운 다양한 내용들을 정리합니다.</li>
      <li>항상 프로그래밍 언어를 배우며, 컴퓨터 공학적인 내용에 대해서 관심이 많습니다.<br />주로 메모리와 데이터 구조에 대해서 공부하고 있습니다.</li>
      <li>기록을 좋아해요. 제 생각과 그리고 다양한 경험들을 경험하고자 노력하고 경험을 기록하고자 노력하고 있어요.<br />사진을 좋아해서 많이 찍고 기록하고 요즘에는 에세이를 쓰고자 노력하고 있어요.
      </li>
    </ul>
    <div>
      <a href="https://www.teamgrit.kr/">Software Engineer @TeamGRIT,Inc.</a><br />
      <a href="https://gdg.community.dev/gdg-golang-korea/">Organizer @GDG Golang Korea</a><br />
      <a href="https://home.sch.ac.kr/security/index.jsp">Soonchunhyang University Information Security Engineering</a>
    </div>
    <h2>2023년 목표</h2>
    <ul>
      <li><input type="checkbox" disabled />최소 국내 2곳, 해외 1곳 이상 여행하기(서울 제외)</li>
      <li class="li-item-tap">2023.01.03 ~ 04 - 부산 여행</li>
      <li class="li-item-tap">2023.01.16 ~ 20 - 일본 도쿄 여행</li>
      <li>gRPC, Kubernetes 공부하기</li>
      <li class="li-item-tap"><input type="checkbox" disabled />gRPC 관련 서적 혹은 강의 2개 이상 읽고 보기</li>
      <li><input type="checkbox" disabled /> 인문학 관련 서적 5권 이상 읽기</li>
      <li><input type="checkbox" disabled />프리드리히 니체의 '차라투스트라는 이렇게 말했다' 완독하기</li>
      <li><input type="checkbox" disabled />다양한 분들과 다양한 곳에서 커피챗 50명 채우기(오프라인, 온라인)</li>
      <li><input type="checkbox" disabled />오프라인 혹은 온라인에서 Go언어 관련 발표하기</li>
    </ul>
    <blockquote>
      <b>”모든 것의 시작은 위험하다. 그러나 무엇을 막론하고,<br />
        시작하지 않으면 아무것도 시작되지 않는다.“</b><br />
      프리드리히 니체의 "인간적인 너무나 인간적인"에서
    </blockquote>
    <blockquote>
      <b>You asked me if an ordinary person, by studying hard,<br>
        would get to be able to imagine these things like I imagine of course!<br>
        I was an ordinary person who studied hard. There's no miracle, people.</b><br />
      <b>여러분이 제게, 평범한 사람이 열심히 공부해서 제가 상상하는 것들을<br />
        똑같이 상상할 수 있느냐고 묻는다면, 물론이죠!<br />
        저도 공부를 열심히 한 평범한 사람이예요. 기적은 없어요. 여러분.</b><br />
      리처드 파인만, Richard Feynman(1918 ~ 1988)
    </blockquote>
    <hr />
    <div class="links">
      <li class="li-item-none">
        <a href="https://hyunsang.dev">Tech Blog</a>
      </li>
      <li class="li-item-none">
        <a href="https://about.hyunsang.dev">Portfolio</a>
      </li>
      <li class="li-item-none">
        <a href="https://github.com/dev-hyunsang">GitHub</a>
      </li>
      <li class="li-item-none">
        <a href="https://www.facebook.com/hyun.sang.0625">Facebook</a>
      </li>
    </div>
  </div>
</template>
<style>
blockquote {
  border-left: 3px solid #3eaf7c;
  padding-left: 10px;
}

.links {
  text-align: right;
}

.li-item-none {
  list-style: none;
  padding-bottom: 0.1rem;
}

.li-item-tap {
  /* padding-left: 1rem; */
  list-style-position: inside;
  text-indent: 0.5rem;
}
</style>
// 20220913
// seoul에서 Kim의 인덱스를 찾는다
// 그 인덱스를 리턴한다

function solution(seoul) {
  const idx = seoul.findIndex(v => v === 'Kim');

  return `김서방은 ${idx}에 있다`;
}

// 테스트 코드
const seoul = ['Mari', 'Jane', 'Kim', 'Harry']
console.log(solution(seoul));

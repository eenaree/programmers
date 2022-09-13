// 20220913
// a와 b의 값을 비교한다
// 작은 값이 시작점, 큰 값이 될때까지 순회한다
// 순회하면서 그 값을 모두 더한다

function solution(a, b) {
  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}

// 테스트 코드
console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));

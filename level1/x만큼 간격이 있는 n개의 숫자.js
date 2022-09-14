// 20220914
// n만큼 반복하면서 이전 x만큼 더한 값을 배열에 추가한다

function solution(x, n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1));
  }

  return answer;
}

// 테스트 코드
console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));

// 20220914 - while문으로 작성해보기
// do while문보다는 while문이 코드 읽기가 더 편함.

// n이 될때까지, 이전 x만큼 더한 값을 배열에 추가한다
function solution2(x, n) {
  const answer = [];
  let i = 0;

  do {
    answer.push(x * (i + 1));
    i += 1;
  } while (i < n);

  return answer;
}

// n이 0 이상인 경우에만, 이전 x만큼 더한 값을 배열에 추가하기
function solution3(x, n) {
  const answer = [];
  let i = 1;

  while (n--) {
    answer.push(x * i);
    i += 1;
  }

  return answer;
}

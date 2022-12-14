// 20220913
// 배열에서 최소값을 찾는다
// 배열에서 최소값을 찾아 제거한다
// 배열의 길이가 0이라면 => -1 추가
// 아니라면 => 배열 리턴

function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter(v => v !== min);

  return answer.length ? answer : [-1];
}

// 테스트 코드
console.log(solution([4, 3, 2, 1]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([-2, -4, -6, 1, 3]));
console.log(solution([10]));

// 20220913 - 2
// 배열의 길이가 1이라면 => -1 리턴
// 아니라면 => 최소값 구하고, 배열에서 최소값 제거 => 배열 리턴

function solution2(arr) {
  if (arr.length == 1) return [-1];

  const min = Math.min(...arr);
  return arr.filter(v => v !== min);
}

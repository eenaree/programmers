// 20220913
// arr을 순회하면서 divisor로 나눈 나머지를 구한다
// 그 나머지 값이 0이라면 => 나누어 떨어지므로, 새 배열에 추가함
// 0이 아니라면 => 나누어 떨어지지 않으므로, 새 배열에 추가하지 않음
// 새 배열의 길이가 0 이상이라면 => 배열 오름차순 정렬
// 아니라면 => 배열에 -1 추가

function solution(arr, divisor) {
  const answer = arr.filter(value => {
    return value % divisor == 0;
  });

  if (answer.length > 0) {
    answer.sort((a, b) => a - b);
  } else {
    answer.push(-1);
  }

  return answer;
}

// 테스트 코드
console.log(solution([10, 32, 5, 9], 9));
console.log(solution([2, 5, 7, 10], 1));
console.log(solution([6, 9, 2], 5));

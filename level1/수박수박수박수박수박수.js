// 20220913
// 문자열 n을 순회하면서 n의 인덱스가 짝수라면 => 박
// 홀수라면 => 수

function solution(n) {
  let result = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      result += '수';
    } else {
      result += '박';
    }
  }

  return result;
}

// 테스트 코드
console.log(`n이 7인 경우: ${solution(7)}`);
console.log(`n이 10인 경우: ${solution(10)}`);

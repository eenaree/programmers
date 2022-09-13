// 20220913
// absolutes의 배열을 순회한다
// absolutes 배열의 인덱스 값으로 signs 배열 값에 접근한다
// => 그 값이 true면 더하고, false면 뺀다

function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      result += absolutes[i];
    } else {
      result -= absolutes[i];
    }
  }

  return result;
}

// 테스트 코드
console.log(solution([4, 7, 12], [true, false, false]));
console.log(solution([1, 2, 3], [false, true, true]));

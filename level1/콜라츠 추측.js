// 20220914
// 입력 숫자 값의 변화과정을 특정 변수 value에 담는다
// 1. 1인지 먼저 확인
//    1이라면 => 0 리턴
//    1이 아니라면 => 짝수/홀수인지 구분하고 할당된 계산을 추가함
// 2. 1이 계속 아니라면 => 짝수/홀수 계산 과정을 계속 반복함.
//    500번 시도했는데도 안됐다면 => -1 리턴
//    1이 산출되면 => 시도 횟수를 리턴

function solution(num) {
  let value = num;
  let answer = 0;

  if (value == 1) return 0;

  for (let i = 0; i < 500; i++) {
    if (value % 2) {
      value = value * 3 + 1;
    } else {
      value = value / 2;
    }

    if (value == 1) {
      answer = i + 1;
      return answer;
    }
  }

  if (value !== -1) return -1;
}

// 테스트 코드
console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));

// 20220914 - 2
// 첫번째 solution 불필요한 코드 제거
// 1. 매개변수의 값의 변화과정을 특정 변수에 담지 않아도 됨.
// 2. 불필요한 if문 제거

function solution2(num) {
  if (num == 1) return 0;

  for (let i = 0; i < 500; i++) {
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num = num / 2;
    }

    if (num == 1) return i + 1;
  }

  return -1;
}

// 첫번째 solution을 while문으로 변경 - 다른 사람 풀이 참고
function solution3(num) {
  let answer = 0;
  while (num != 1 && answer < 500) {
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num = num / 2;
    }
    answer++;
  }

  return num == 1 ? answer : -1;
}

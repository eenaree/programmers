// 20220913
// 번호를 순회한다
// 번호의 길이에서 번호의 인덱스를 뺀 값이 4 or 4보다 작다면 => 그대로
// 아니라면 => * 처리

function solution(phone_number) {
  let answer = '';

  for (let i = 0; i < phone_number.length; i++) {
    if (phone_number.length - i > 4) {
      answer += '*';
    } else {
      answer += phone_number[i];
    }
  }
  
  return answer;
}

// 테스트 코드
console.log(solution('01033334444'));
console.log(solution('027778888'));

// 20220914
// s의 첫글자가 무엇인지 확인한다
// 첫글자가 - 부호인 경우 =>  초기값 0에 그 뒤 숫자 빼기
// 첫글자가 + 부호인 경우 => 초기값 0에 그 뒤 숫자 더하기
// 첫글자가 숫자인 경우 => 초기값 0에 숫자만 더하기

function solution(s) {
  let answer = 0;

  if (s[0] == '-') {
    answer -= +s.slice(1);
  } else if (s[0] == '+') {
    answer += +s.slice(1);
  } else {
    answer += +s.slice();
  }

  return answer;
}

// 20220914 - 2 - 다른사람 풀이 참고
// 형변환에 대한 이해가 부족하므로 다시 공부할 것.

function solution(s) {
  return +s;
}

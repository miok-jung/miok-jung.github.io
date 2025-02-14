// NOTE: 문자를 받아 숫자 검증
export function isNumber(str: string) {
  return /^\d+$/.test(str);
}

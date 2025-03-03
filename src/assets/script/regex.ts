// NOTE: 숫자 검증
export const isNumber = (str: string) => {
  return /^\d+$/.test(str);
};

// NOTE: 연산자 검증
export const isOperatorChar = (char: string): boolean => {
  return /^[+\-*/]$/.test(char);
};

// NOTE: 숫자 연산자 배열
export const tokenizeExpression = (expression: string): (string | number)[] => {
  return expression
    .match(/(\d+|\+|-|\*|\/)/g)!
    .map((token) => (/^[0-9]+$/.test(token) ? Number(token) : token));
};

import isEven from 'is-even';
import isOdd from 'is-odd';

export const getNumberInfos = (start = 0, limit = 10): string[] => {
  const numberInfos: string[] = [];

  for (let num = start; num < limit; num++) {
    numberInfos.push(getNumberInfo(num));
  }

  return numberInfos;
};

const getNumberInfo = (num: number): string => {
  if (isOdd(num)) {
    return `The number ${num} is odd`;
  }

  if (isEven(num)) {
    return `The number ${num} is even`;
  }

  return `The number ${num} is neither odd nor even. Really?`;
};

/* 
  Adds integer to value by "addBy" amount, starts from 0 if "index + addBy" > maxIndex
*/
export const rotateBy = (index: number, addBy: number, maxIndex: number) =>
  (index + addBy) % maxIndex;

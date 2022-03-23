export const calculateCredit = (prise: number) => {
  const share: number = prise / 12;

  return share.toFixed(2);
};

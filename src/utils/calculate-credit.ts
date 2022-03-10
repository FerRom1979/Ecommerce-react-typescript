export const calculateCredit = (prise: number) => {
  const share = prise / 12;

  return share.toFixed(2);
};

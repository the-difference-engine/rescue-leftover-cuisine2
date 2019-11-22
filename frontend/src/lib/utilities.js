// eslint-disable-next-line import/prefer-default-export
export function formatDate(dateString) {
  const prependZero = n => (n < 10 ? `0${n}` : n);
  const date = new Date(dateString);

  const day = prependZero(date.getDate());
  const month = prependZero(date.getMonth() + 1);

  return `${month}/${day}/${date.getFullYear()}`;
}

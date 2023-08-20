/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce(fn: any, delay: number | undefined) {
  let timer: string | number | NodeJS.Timeout | undefined;
  return function (...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default debounce;

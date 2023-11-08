export default function <A = unknown, R = void>(
  func: (...args: A[]) => R,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: A[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

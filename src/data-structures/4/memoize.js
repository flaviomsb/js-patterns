export default function memoize(fn) {
  const cache = {};

  function lookUp(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const res = fn.apply(this, args);
    cache[args] = res;

    return res;
  }

  return lookUp;
}

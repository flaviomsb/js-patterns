export default function memoize(func: (arg: number) => number) {
  const cache: { [key: number]: number } = {};

  function exec(input: number) {
    if (!cache[input]) {
      cache[input] = func(input);
    }

    return cache[input];
  }

  return exec;
}
